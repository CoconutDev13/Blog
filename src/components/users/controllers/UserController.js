const HttpResponse = require('../../../configurations/HttpResponse')
const hash = require('../../../utilities/secutity/hash')
const { generateToken } = require('../../../utilities/secutity/token')
const UserService = require('../services/UserService')
const TokenService = require('../services/TokenService')
const { APIS } = require('../../../configurations/Endpoints')

module.exports.signup = async (request, response) => {
    const { username, password } = request.body    

    if (!username || !password) {
        const { status, message } = HttpResponse.BAD_REQUEST
        return response.status(status).json({ message })
    }

    const user = await UserService.getUserByUsername(username)

    if (user) {
        const { status, message } = HttpResponse.CONFLICT
        return response.status(status).json({ message })
    }

    const hashedPassword = await hash.hash(password)

    UserService.createUser({ username, password: hashedPassword })

    const { status, message } = HttpResponse.CREATED

    response.status(status).json({ message: message })
}

module.exports.login = async (request, response) => {
    const { username, password } = request.body

    console.log(request.body)

    if (!username || !password) {
        const { status, message } = HttpResponse.BAD_REQUEST
        return response.status(status).json({ message })
    }

    const user = await UserService.getUserByUsername(username)

    if (!user) {
        const { status, message } = HttpResponse.NOT_FOUND
        return response.status(status).json({ message })
    }

    const invalidPassword = !hash.compareHash(password, user.password)

    if (invalidPassword) {
        const { status, message } = HttpResponse.FORBIDDEN
        return response.status(status).json({ message })
    }

    const id = user._id.toString()
    const token = generateToken(id)

    const cookieExpires = new Date();
    cookieExpires.setTime(cookieExpires.getTime() + 5 * 60 * 60 * 1000)
    response.cookie('token', token, {
        maxAge: 1000 * 60 * 60 * 5,
        httpOnly: true,
        expires: cookieExpires,
        secure: false
    })


    const { status, message } = HttpResponse.OK
    return response.status(status).json({
        message,
        redirect: '/explore',
        _links: {
            userData: APIS.userData
        }
    })
}

module.exports.setBio = async (request, response) => {

}

module.exports.logout = async (request, response) => {
    const { token } = request.authMiddle
    await TokenService.createToken(token)

    const { status, message } = HttpResponse.OK
    return response.status(status).json({
        message,
    })
}

module.exports.getUser = async (request, response) => {
    const { user } = request.authMiddle
    const { status, message } = HttpResponse.OK
    response.status(status).json({
        message,
        user
    })
}