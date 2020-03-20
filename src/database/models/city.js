'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: DataTypes.STRING
    },
    {}
  );
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};
