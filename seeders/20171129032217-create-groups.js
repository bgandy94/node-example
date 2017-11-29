'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();

    queryInterface.bulkInsert('Groups', [
      {
        name: 'Test Business 1',
        groupTypeId: 1,
        description: 'This is a test group to represent a business',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Test Family 1',
        groupTypeId: 2,
        description: 'This is a test group to represent a family',
        createdAt: now,
        updatedAt: now
      }
    ])
  },

  down: (queryInterface, Sequelize) => {

  }
};
