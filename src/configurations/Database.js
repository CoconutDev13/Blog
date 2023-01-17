const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

module.exports.connect = (callback) => mongoose
    .connect(process.env.MONGO_URI)
    .then(callback)
    .catch(error => console.log(error))