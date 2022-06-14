const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
})

module.exports =  Pet = mongoose.model('Pet', petSchema)