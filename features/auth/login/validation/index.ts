import Joi from "joi";

export const LoginSchema = Joi.object({
  email: Joi.string()
    .regex(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    )
    .required()
    .messages({
      "string.required": "Email is required!",
      "string.empty": "Email is required!",
      "string.pattern.base": "Email must include the @ symbol!",
    }),
  password: Joi.string().required().messages({
    "string.required": "Password is required!",
    "string.empty": "Password is required!",
  }),
});
