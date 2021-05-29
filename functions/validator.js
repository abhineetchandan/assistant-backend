const Joi = require('joi')

function validateSignup(user) {
    const schema = Joi.schema({
        name: Joi.string().min(3).max(40).required(),
        email: Joi.string().min(5).max(600).required().email(),
        password: Joi.string().min(5).max(255).required()
    })

    return schema.validate(user)
}

function validateSignin(user) {
    const schema = Joi.schema({
        email: Joi.string().min(5).max(600).required().email(),
        password: Joi.string().min(5).max(255).required()
    })

    return schema.validate(user)
}

module.exports.validateUser = validateSignup;
module.exports.validateSignin = validateSignin;