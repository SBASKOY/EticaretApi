

const Joi = require("joi");

const createValidation = Joi.object({
    title: Joi.string().required().min(3),
    sub_title: Joi.string().required().min(10),
    product_number: Joi.string().required().min(3),
    category_id: Joi.string().required().min(10),
    tags:Joi.array().required().min(3),
    sub_products: Joi.array().required().items(
        Joi.object({
            likes:Joi.number(),
            sub_product_number: Joi.string().required(),
            price: Joi.number().required(),
            sales_price: Joi.number(),
            information: Joi.string().required().min(5),
            color: Joi.string().required().min(3),
            sizes: Joi.array().required().items(
                Joi.object({
                    size: Joi.string().required(),
                    count: Joi.number().required()
                })
            ).min(1)
        })
    ).min(1)

})

const updateValidation = Joi.object({
    title: Joi.string().min(3),
    sub_title: Joi.string().min(10),
    product_number: Joi.string().min(3),
    category_id: Joi.string().min(10),
    tags: Joi.array().min(3),
    sub_products: Joi.array().items(
        Joi.object({
            likes: Joi.number(),
            sub_product_number: Joi.string(),
            price: Joi.number(),
            sales_price: Joi.number(),
            information: Joi.string().min(5),
            color: Joi.string().min(3),
            sizes: Joi.array().items(
                Joi.object({
                    size: Joi.string(),
                    count: Joi.number()
                })
            ).min(1)
        })
    ).min(1)

})
module.exports = {
    createValidation,
    updateValidation
}