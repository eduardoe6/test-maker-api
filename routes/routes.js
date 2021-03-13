const testRoutes = require("./test.routes")
const questionRoutes = require("./question.routes")

module.exports = (app) => {

    testRoutes(app)
    questionRoutes(app)
    
}