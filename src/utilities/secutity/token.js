const jwt = require('jsonwebtoken')

module.exports.generateToken = (id) => {
    const token = jwt.sign({id}, process.env.SECRET, { algorithm: "HS512"})
    return token
}

module.exports.getDataFromToken = (token) => {
    const data = jwt.verify(token, process.env.SECRET, { algorithm: "HS512"})
    return data
}