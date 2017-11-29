'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    name: DataTypes.STRING(75),
    description: DataTypes.STRING(75)
  });

  Group.associate = function (models) {
    Group.belongsTo(models.GroupType)
  };

  return Group;
};