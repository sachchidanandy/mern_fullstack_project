const Joi = require('joi');

exports.validator = require('express-joi-validation').createValidator({});

exports.registerSchema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(8).max(16).required(),
    email: Joi.string().email().required(),
});

exports.loginSchema = Joi.object({
    password: Joi.string().min(8).max(16).required(),
    email: Joi.string().email().required(),
});
