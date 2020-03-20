'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Cities',
      [
        {
          id: 2222,
          name: 'bantul',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2223,
          name: 'sleman',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2224,
          name: 'waikuku',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2225,
          name: 'manokwari',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2226,
          name: 'bungul',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
