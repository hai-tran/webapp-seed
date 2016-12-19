import * as Joi from 'joi';

export const createTaskModel = Joi.object().keys({
  id: Joi.allow(null),
  name: Joi.string().required(),
  description: Joi.string().required()
});

export const updateTaskModel = Joi.object().keys({
  id: Joi.allow(null),
  name: Joi.string().required(),
  description: Joi.string().required()
});
