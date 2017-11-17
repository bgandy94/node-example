'use strict';
const Hapi = require('hapi');
const CookieAuth = require('hapi-auth-cookie');

const routes = require('./routes');

const server = new Hapi.Server();

// server setup
server.connection({ port: 3000, host: 'localhost' });
server.realm.modifiers.route.prefix = '/api/';
server.route([].concat.apply([], routes));

const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
server.app.cache = cache;

server.register(CookieAuth, (err) => {
    if (err) {
        throw err;
    }
});

server.auth.strategy('session', 'cookie', true, {
    password: 'lskjdflksjlkfs3232wlkejflkwejk23jl2k',
    cookie: 'sid',
    isSecure: false,
    clearInvalid: true,
    validateFunc: function (request, session, callback) {
        cache.get(session.sid, (err, cached) => {
            if (err) {
                return callback(err, false);
            }

            if (!cached) {
                return callback(null, false);
            }
            return callback(null, true, cached.user)
        })
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at ${server.info.uri}`)
})