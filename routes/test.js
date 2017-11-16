'use strict';

module.exports = [{
    method: 'GET',
    path: 'test',
    handler: function (request, reply) {
        reply('Test worked!!!');
    }
}]
