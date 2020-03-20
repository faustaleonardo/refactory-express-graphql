'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define(
    'Gender',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      value: DataTypes.STRING
    },
    {}
  );
  Gender.associate = function(models) {
    // associations can be defined here
  };
  return Gender;
};
