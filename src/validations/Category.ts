

import BaseJoi from 'joi';

import JoiDate from '@joi/date';


const Joi = BaseJoi.extend(JoiDate);



const createValidation = Joi.object({
    name: Joi.string().required().min(3),
    order:Joi.number().required(),
})

const updateValidation = Joi.object({
    name: Joi.string().min(3),
    order: Joi.number(),
})
export  {
    createValidation,
    updateValidation,
}