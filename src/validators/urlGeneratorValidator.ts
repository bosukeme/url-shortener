import Joi from "joi";

export const shortenUrlSchema = Joi.object({
  longUrl: Joi.string().uri().required()
});


export const shortCodeSchema = Joi.object({
  shortCode: Joi.string().length(7).required(),
});