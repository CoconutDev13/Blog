const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

module.exports.connect = () => mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log('Database connection established'))
    .catch(error => console.log(error))