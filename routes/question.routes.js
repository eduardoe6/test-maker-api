const service = require('../service/question.service')

module.exports = (app) => {
 
    app.post('/question', async (req, res) => {
        await service.save(req.body)
        res.end()
    })

    app.get('/question/byTest/:test', async (req, res) => {
        let test = req.params.test
        let questions = await service.findByTest(test)
        res.json(questions)
    })

}