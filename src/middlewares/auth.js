const HttpResponse = require("../configurations/HttpResponse")
const { getDataFromToken } = require("../utilities/secutity/token")

const TokenService = require('../components/users/services/TokenService')

module.exports = async (request, response, next) => {
    const authHeader = request.headers['authorization']
    
    if(!authHeader) {
        const { status, message } = HttpResponse.UNAUTHORIZED
        return response.status(status).json({message})
    }

    const token = authHeader.split(' ')[1]
    
    const bannedToken = await TokenService.getToken(token)
    
    if(bannedToken) {
        const { status, message } = HttpResponse.FORBIDDEN
        return response.status(status).json({message})
    }

    const userId = getDataFromToken(token)
    request.authMiddle = { userId, token }

    next()
}