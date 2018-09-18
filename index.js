'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const asyncify = require('express-asyncify')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./route.json')

mongoose.connect(`mongodb://localhost/${process.env.NODE_ENV || 'prod'}`, {
  useNewUrlParser: true
})

const app = asyncify(express())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes.forEach(routeConfig => {
  const { path, method, handlers } = routeConfig
  const requireList = []
  handlers.forEach(fileName => requireList.push(require(`./handlers/${fileName}`)))
  app[method.toLowerCase()](path, ...requireList)
})

app.use((err, req, res, next) => {
  console.error(err)
  res.json(err)
})

module.exports = app.listen(7070)
