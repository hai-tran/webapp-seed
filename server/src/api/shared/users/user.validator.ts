import * as Joi from 'joi';

export const loginUserModel = Joi.object().keys({
  username: Joi.string().trim().required(),
  password: Joi.string().trim().required()
});
