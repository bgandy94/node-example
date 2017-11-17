'use strict';

const Joi = require('joi');

const accountController = require('../controllers').accountController;

module.exports = [
    {
        method: 'POST',
        path: 'account/register',
        handler: accountController.register,
        config: {
            auth: false,
            validate: {
                payload: {
                    email: Joi.string().required(),
                    password: Joi.string().required(),
                    firstName: Joi.string().required(),
                    lastName: Joi.string().required()
                }
            }
        },
    },
    {
        method: 'POST',
        path: 'account/login',
        handler: accountController.login,
        config: {
            auth: false,
            validate: {
                payload: {
                    email: Joi.string().required(),
                    password: Joi.string().required(),
                }
            }
        }
    },
    {
        method: 'POST',
        path: 'account/logout',
        handler: accountController.logout
    }
]