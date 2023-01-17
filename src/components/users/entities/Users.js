const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const userSchema = mongoose.Schema({
    id: { type: String, default: uuidv4() },
    username: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String }
}, { timestamp: true })

module.exports = mongoose.model('User', userSchema)