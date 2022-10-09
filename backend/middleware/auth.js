const jwt = require('jsonwebtoken');

const { tokenRequired, invalidToken } = require('../utils');
const { TOKEN_SECRET } = require('../config');

exports.verifyJWT = (req, res, next) => {
    try {
        let token = req.body.token || req.query.token || req.headers['authorization'];

        if (!token) {
            return tokenRequired(res);
        }

        token = token.replace(/^Bearer\s+/, ""); // Remove Bearer from token
        const decodedToken = jwt.verify(token, TOKEN_SECRET);
        req.user = decodedToken;
    } catch (error) {
        console.log('Error while verify token', error);
        return invalidToken(res);
    }

    return next();
}