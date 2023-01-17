const bcrypt = require('bcrypt')

module.exports.hash = async (data, saltRounds = 10) => {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashed = await bcrypt.hash(data, salt)
    return hashed
}

module.exports.compareHash = async (data, hash) => {
    return bcrypt.compare(data, hash)
}
