const Token = require('../entities/BannedTokens')

module.exports.getToken = (token) => {
    return Token.findOne({token})
}

module.exports.createToken = (token) => {
    return Token.create({token})
}