const bcrypt = require('bcryptjs');

const { userModel } = require('../../models');
const { internalServerError, userAlreadyExist, generateJWTToken } = require('../../utils');


module.exports = async (req, res) => {
    try {
        const { username, password, email } = req.body || {};

        // If user exist
        const userExist = await userModel.exists({ email: email.toLowerCase() });
        if (userExist) {
            return userAlreadyExist(res);
        }

        // Encrypt password
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({ username, password: hashPassword, email: email.toLowerCase() });

        // Create JWT token
        const jwtToken = generateJWTToken({ userId: user._id, email: user.email });

        // send user detail to client
        return res.status(201).json({
            username: user.username,
            token: jwtToken,
            email: user.email
        });
    } catch (err) {
        console.log(err);
        return internalServerError(res);
    }
}