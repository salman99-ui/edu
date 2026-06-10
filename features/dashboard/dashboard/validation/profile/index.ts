import Joi from "joi";

export const ProfileSchema = Joi.object({
  first_name: Joi.string().required().messages({
    "string.required": "Nama depan harus diisi!",
    "string.empty": "Nama depan harus diisi!",
  }),
  last_name: Joi.string().required().messages({
    "string.required": "Nama belakang harus diisi!",
    "string.empty": "Nama belakang harus diisi!",
  }),
  username: Joi.string().required().messages({
    "string.required": "Username harus diisi!",
    "string.empty": "Username harus diisi!",
  }),
  phone_number: Joi.string().required().messages({
    "string.required": "No WhatsApp harus diisi!",
    "string.empty": "No WhatsApp harus diisi!",
  }),
  email: Joi.string()
    .regex(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    )
    .required()
    .messages({
      "string.required": "Email harus diisi!",
      "string.empty": "Email harus diisi!",
      "string.pattern.base": "Email must include the @ symbol!",
    }),
  position: Joi.string().required().messages({
    "string.required": "Jabatan harus diisi!",
    "string.empty": "Jabatan harus diisi!",
  }),
});

export const PasswordSchema = Joi.object({
  password: Joi.string().required().messages({
    "string.required": "Password harus diisi!",
    "string.empty": "Password harus diisi!",
  }),
  new_password: Joi.string().required().messages({
    "string.required": "Password harus diisi!",
    "string.empty": "Password harus diisi!",
  }),
  confirm_password: Joi.string()
    .required()
    .equal(Joi.ref("new_password"))
    .messages({
      "any.only": "Confirm Password Tidak Sama",
    }),
});
