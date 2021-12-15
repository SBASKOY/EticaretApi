

const Joi = require("joi").extend(require('@joi/date'));;



const createValidation = Joi.object({
    name: Joi.string().required().min(3),
    order:Joi.number().required(),
})

const updateValidation = Joi.object({
    name: Joi.string().min(3),
    order: Joi.number(),
})
module.exports = {
    createValidation,
    updateValidation,
}