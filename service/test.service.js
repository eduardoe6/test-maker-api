const repository = require('../repository/test.repository')

exports.save = async (test) => {
    await repository.save(test)
}

exports.findAll = async () => {
    return await repository.findAll()
}