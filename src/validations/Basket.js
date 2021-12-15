
const Joi = require("joi").extend(require('@joi/date'));;
const createValidation = Joi.object({
    product_id: Joi.string().required().min(10),
    quantity: Joi.number().required().min(1),
})

const updateValidation = Joi.object({
    product_id: Joi.string().min(3),
    quantity: Joi.number().min(1),
})
module.exports = {
    createValidation,
    updateValidation,
}