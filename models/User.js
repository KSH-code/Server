'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  country: String,
  visitedCount: Number,
  startDate: Date,
  endDate: Date,
  age: Number,
  gender: {
    type: String,
    default: ''
  },
  job: {
    type: String,
    default: ''
  },
  visitedPlace: {
    type: Array,
    default: []
  }
})
module.exports = mongoose.model('User', userSchema)
