

const Joi = require("joi").extend(require('@joi/date'));;

const loginValidation = Joi.object({
    email: Joi.string().required().min(3),
    password: Joi.string().required().min(6),
})
const resetValidation = Joi.object({
    email: Joi.string().required().min(3),
    
})

const createValidation = Joi.object({
    name: Joi.string().required().min(3),
    surname: Joi.string().required().min(3),
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(6),
    email: Joi.string().required().min(10),
    phone: Joi.string().required().min(10),

    gender: Joi.string().required().min(2),
    birtday: Joi.date().required().format('YYYY-MM-DD').utc()
})

const updateValidation = Joi.object({
    name: Joi.string().min(3),
    surname: Joi.string().min(3),
    username: Joi.string().min(3),
    password: Joi.string().min(6),
    email: Joi.string().min(10),
    phone: Joi.string().min(10),
    gender: Joi.string().min(2),
    birtday: Joi.date().raw()
})
module.exports = {
    createValidation,
    updateValidation,
    loginValidation,
    resetValidation
}