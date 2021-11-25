const Joi = require("joi");

const signUpSchema = Joi.object().keys({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  signUpSchema,
};
