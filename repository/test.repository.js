const Test = require('../model/test.model')
const db = require('../db')

exports.findAll = async () => {
    let con = await db.connect()
    let result = await Test.find()
    
    con.disconnect()
    return result
}

 exports.save = async (data) => {
    let con = await db.connect()
    
    let newTest = new Test(data)
    newTest.creationDate = new Date();

    await newTest.save()
    con.disconnect()
}