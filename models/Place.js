'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: String,
  information: Array
})
module.exports = mongoose.model('Place', placeSchema)
