const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()

app.use(cors())
app.use(express.json())

routes(app)

app.listen(8080, () => {
    console.log("Server is up!")
})