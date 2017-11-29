'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let now = new Date();
    return queryInterface.bulkInsert('GroupTypes', [
      {
        name: 'Business',
        description: 'A business or professionally associated group',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Family',
        description: 'A group of people who are related',
        createdAt: now,
        updatedAt: now
      },
    ])
  },

  down: (queryInterface, Sequelize) => {

  }
};
