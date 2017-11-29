'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING(75),
    lastName: DataTypes.STRING(75),
    email: DataTypes.STRING(75),
    company: DataTypes.STRING(75),
    lastContacted: DataTypes.DATETIME
  });

  Contact.associate = function (models) {
    Contact.belongsTo(models.Group)
  };

  return Contact;
};