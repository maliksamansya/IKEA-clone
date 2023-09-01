const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET

function convertPayloadToToken(payload) {
    return jwt.sign(payload, secretKey)
}

function convertTokenToPayload(token) {
    return jwt.verify(token, secretKey)
}

module.exports = {
    convertPayloadToToken,
    convertTokenToPayload,
}