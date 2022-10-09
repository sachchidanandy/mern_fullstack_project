const bcrypt = require('bcryptjs');

const { userModel } = require('../../models');
const { internalServerError, invalidCredentials, generateJWTToken } = require('../../utils');


module.exports = async (req, res) => {
    try {
        const { password, email } = req.body || {};

        // If user exist
        const user = await userModel.findOne({ email: email.toLowerCase() });
        if (!user) {
            return invalidCredentials(res);
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return invalidCredentials(res);
        }

        // update login time
        await user.updateOne({ last_login: Date.now() })

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