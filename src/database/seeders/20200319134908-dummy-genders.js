'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Genders',
      [
        {
          id: 10,
          value: 'laki-laki',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 20,
          value: 'perempuan',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genders', null, {});
  }
};
