const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
    name: String,
    creationDate: Date
})

module.exports = mongoose.model('Test', testSchema)