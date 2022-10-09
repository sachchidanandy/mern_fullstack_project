require('dotenv').config();

exports.PORT = process.env.PORT
exports.MONGO_URI = process.env.MONGO_URI
exports.TOKEN_SECRET = process.env.TOKEN_SECRET
exports.TOKEN_EXPIRE = process.env.TOKEN_EXPIRE
