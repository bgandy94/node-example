'use strict';
module.exports = (sequelize, DataTypes) => {
  var GroupType = sequelize.define('GroupType', {
    name: DataTypes.STRING(75),
    description: DataTypes.STRING(150)
  });

  GroupType.associate = function(models) {
    GroupType.hasMany(models.Group);
  };

  return GroupType;
};