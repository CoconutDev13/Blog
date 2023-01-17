const { INTERNAL_ERROR } = require("../configurations/HttpResponse")

module.exports = (error, _request, response, next) => {
    if(error) {
        const {status, message} = INTERNAL_ERROR
        return response.status(status).json({message})
    }
    
    next()
}