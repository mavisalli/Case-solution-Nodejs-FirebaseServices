const Joi = require("joi");

// All request body validation rules regarding register/login are written below with Joi.
const signUpSchema = Joi.object().keys({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  birthDay: Joi.date().raw().required(),
  phoneNumber: Joi.string().required(),
  photoUrl: Joi.string().required(),
});

module.exports = {
  signUpSchema,
};
