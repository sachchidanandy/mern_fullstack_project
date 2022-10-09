const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, TOKEN_EXPIRE } = require('../config');

exports.generateJWTToken = payload => {
    let token = false;
    if (payload && typeof(payload) === 'object') {
        token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: `${TOKEN_EXPIRE}`})
    }
    return token;
}