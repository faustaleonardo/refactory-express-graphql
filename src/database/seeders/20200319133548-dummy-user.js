'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 22231003,
        name: 'green panda',
        hobby: 'climbing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22252007,
        name: 'son goku',
        hobby: 'sport',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22241009,
        name: 'inuyasha',
        hobby: 'running',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22261010,
        name: 'michael J',
        hobby: 'singing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22222011,
        name: 'suprayitno',
        hobby: 'painting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22232012,
        name: 'kuncoro',
        hobby: 'singing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22252003,
        name: 'budi',
        hobby: 'joking',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22241004,
        name: 'sugeng',
        hobby: 'coding',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22232006,
        name: 'hamilton',
        hobby: 'tennis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22261003,
        name: 'lele goreng',
        hobby: 'cooking',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
