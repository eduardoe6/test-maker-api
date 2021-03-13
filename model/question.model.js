const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({
    description: String,
    correct: Boolean
})

const questionSchema = mongoose.Schema({
    description : String,
    test : {
        type: mongoose.Types.ObjectId,
        ref: 'Test'
    },
    answers : [answerSchema]
})

module.exports = mongoose.model('Question', questionSchema)