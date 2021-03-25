import Joi from 'joi'

export const validate = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().min(2).max(255).required(),
        lastname: Joi.string().min(2).max(255).required(),
        email: Joi.string().email().lowercase().max(255).required(),
        password: Joi.string().min(6).required(),
        confirmPassword : Joi.string().min(6).required(),
        description: Joi.string().max(140),
        job: Joi.string().min(2)
    })
    return schema.validate(data)
}