const mongoose = require('mongoose')

module.exports = {

    connect() {
        return mongoose.connect('mongodb://localhost:27017/db_test_maker', 
            { useNewUrlParser: true, useUnifiedTopology: true})
    }
}