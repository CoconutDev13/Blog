const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const sectionSchema = mongoose.Schema({
    content: { type: String },
    type: { type: Number}
})

const postSchema = mongoose.Schema({
    id: { type: String, default: uuidv4() },
    title: { type: String, required: true},
    description: { type: String, required: true },
    sections: { type: [sectionSchema]},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { timestamp: true })

module.exports = mongoose.model('Post', postSchema)