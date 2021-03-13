const repository = require('../repository/question.repository')

exports.save = async (question) => {
    await repository.save(question)
}

function mapAnswer(answer) {
    return {
        _id: answer._id,
        description: answer.description
    }
}

function mapQuestion(question) {
    return {
        _id: question._id,
        description: question.description,
        answers: question.answers.map(mapAnswer)
    }
}

exports.findByTest = async (test) => {
    let questions = await repository.findByTest(test);
    return questions.map(mapQuestion)
}