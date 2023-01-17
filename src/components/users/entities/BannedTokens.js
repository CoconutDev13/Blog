const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema({
    token: { type: String },
}, { timestamp: true })

module.exports = mongoose.model('Token', tokenSchema)