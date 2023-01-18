const Post = require('../entities/Post')

module.exports.getPostById = id => Post.findById(id)
module.exports.getPostByTitle = title => Post.findOne({ title })
module.exports.createPost = (post) => Post.create(post)