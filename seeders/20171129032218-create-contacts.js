'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let now = new Date();

    return queryInterface.bulkInsert('Contacts', [
      {
        firstName: 'Brandon',
        lastName: 'Gandy',
        email: 'brandon.gandy@diversive.net',
        createdAt: now,
        updatedAt: now
      },
      {
        firstName: 'Kelley',
        lastName: 'Toney',
        email: 'kelleytoney@gmail.com',
        createdAt: now,
        updatedAt: now
      }], {});
 
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
