const HttpResponse = require("../configurations/HttpResponse")
const { getDataFromToken } = require("../utilities/secutity/token")

const UserService = require('../components/users/services/UserService')
const TokenService = require('../components/users/services/TokenService')

/**
 * That middleware authenticate user using JWT token that is taken from cookies
 */
module.exports = async (request, response, next) => {
    console.log(request.cookies)
    const { token } = request.cookies
    if(!token) {
        const { status, message } = HttpResponse.UNAUTHORIZED
        return response.status(status).json({message})
    }

    const bannedToken = await TokenService.getToken(token)
    
    if(bannedToken) {
        const { status, message } = HttpResponse.FORBIDDEN
        return response.status(status).json({message})
    }

    const userId = getDataFromToken(token).id
    const user = await UserService.getUserById(userId) 

    request.authMiddle = { userId, user, token }

    next()
}