const Question = require("../model/question.model")
const db = require("../db")

exports.findByTest = async (testId) => {
    let con = await db.connect()

    let result = await Question.find({
        test: testId
    })

    con.disconnect()
    return result
}

exports.save = async (data) => {
    let con = await db.connect()

    let question = new Question(data)
    await question.save()

    con.disconnect()
}