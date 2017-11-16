'use strict';

const Bcrypt = require('bcrypt');
const User = require('../models').User;

const helpers = require('../helpers/service');

module.exports = {
    register: (user) => {
        return Bcrypt.genSalt(saltRounds).then(salt => {
            return Bcrypt.hash(user.password, salt).then(hash => {
                user.passwordHash = hash
                delete user.password;
                return User.create(user);
            });
        });
    },
    login: (login) => {
        return User.findOne({ where: { email: login.email } }).then(user => {
            return Bcrypt.compare(login.password, user.dataValues.passwordHash).then(resp => {
                if (resp) {
                    return user.dataValues;
                }
            }).catch(err => {
                return 'error!';
            })
        })
    }
}

const saltRounds = 10;
