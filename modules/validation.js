const { celebrate, Joi } = require('celebrate');

const createUserCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    about: Joi.string().required(),
    avatar: Joi.string().required()
  })
})

const createCardCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    link: Joi.string().required()
  })
})

module.exports = { createUserCheck, createCardCheck }