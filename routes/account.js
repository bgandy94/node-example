'use strict';

const Joi = require('joi');

const accountService = require('../services').accountService;

module.exports = [
    {
        method: 'POST',
        path: 'account/register',
        handler: (request, reply) =>
            accountService.register(request.payload)
                .then(res => {
                    reply('Success!')
                })
                .catch(err => reply('error')),
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
        handler: (request, reply) =>
            accountService.login(request.payload)
                .then(user => {
                    request.server.app.cache.set(user.id+'', {user:user}, 0, (err) => {
                        if (err) {
                            reply(err);
                        }
                        request.cookieAuth.set({sid: user.id+''});
                    })
                    reply('success!');
                })
                .catch(err => reply(err)),
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
        handler: (request, reply) => {
            console.log(request.server.app.cache);
            request.cookieAuth.clear();
            reply('Successfully logged out!');
        }
    }
]