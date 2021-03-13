const service = require('../service/test.service')

module.exports = (app) => {

    app.get('/test', async (req, res) => {
        let result = await service.findAll()
        res.json(result)
    })

    app.post('/test', async (req, res) => {
        await service.save(req.body)
        res.end()
    })

}