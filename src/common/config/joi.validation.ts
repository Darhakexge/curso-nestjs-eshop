import Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    APP_ENV: Joi.alternatives(
        'local',
        'development',
        'testing',
        'production',
    ).default('local'),
    APP_PORT: Joi.number().default(3000),
    DB_HOST: Joi.required(),
    DB_PORT: Joi.number().required(),
    DB_DATABASE: Joi.required(),
    DB_USERNAME: Joi.required(),
    DB_PASSWORD: Joi.required(),
});
