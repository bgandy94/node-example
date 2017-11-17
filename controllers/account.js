'use strict';

const accountService = require('../services').accountService;

module.exports = {
    login: (request, reply) => {
        accountService.login(request.payload)
            .then(user => {
                request.server.app.cache.set(user.id + '', { user: user }, 0, (err) => {
                    if (err) {
                        reply(err);
                    }
                    request.cookieAuth.set({ sid: user.id + '' });
                })
                reply('success!');
            })
            .catch(err => reply(err))
    },
    register: (request, reply) => {
        accountService.register(request.payload)
            .then(res => reply('Success!'))
            .catch(err => reply('error'))

    },
    logout: (request, reply) => {
        request.server.app.cache.drop(request.state.sid.sid);
        request.cookieAuth.clear();
        reply('Successfully logged out!');
    }
}