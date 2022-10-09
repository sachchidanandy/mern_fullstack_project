const express = require('express');
const authRoutes = express.Router();

const { userLogin, userRegistration } = require('../controllers/auth');
const { validator, registerSchema, loginSchema } = require('../utils');
const { verifyJWT } = require('../middleware');

authRoutes.post('/register', validator.body(registerSchema), userRegistration);

authRoutes.post('/login', validator.body(loginSchema), userLogin);

authRoutes.get('/protected', verifyJWT, (req, res) => {
    res.send("Valid token")
})

module.exports = authRoutes;