const HttpResponse = require('../../../configurations/HttpResponse')
const PostService = require('../services/PostServive')

module.exports.create = async (request, response) => {
    const { title, description, sections } = request.body
    const { user } = request.authMiddle

    if (!title || !description || !sections) {
        const { status, message } = HttpResponse.BAD_REQUEST
        return response.status(status).json({ message })
    }

    const oldPost = await PostService.getPostByTitle(title)
    if (oldPost) {
        const { status, message } = HttpResponse.CONFLICT
        return response.status(status).json({ message })
    }

    const post = await PostService
        .createPost({ title, description, sections, author: user._id })
        .catch(error => {
            console.error(error)
            const { status, message } = HttpResponse.INTERNAL_ERROR
            return response.status(status).json({ message })
        });

    const { status, message } = HttpResponse.OK
    return response.status(status).json({
        message,
        post,
        _embed: {
            "user": request.authMiddle.user
        }    
    })
}