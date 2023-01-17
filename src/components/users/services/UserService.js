const User = require('../entities/Users')

module.exports.getUsers = (limit=10) => {
    return User.find().limit(limit)
}

module.exports.getUserById = (id) => {
    return User.findById(id)
}

module.exports.getUserByUsername = (username) => {
    return User.findOne({username})
}

module.exports.createUser = (user) => {
    return User.create(user)
}