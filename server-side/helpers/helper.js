const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = 10



const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt)
}

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}

const signToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}
