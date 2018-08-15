"use strict";
module.exports = (sequelize, DataTypes) => {
  var UserProduct = sequelize.define(
    "UserProduct",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
    },
    { tableName: "UserProduct" }
  );
  UserProduct.associate = function(models) {
    // associations can be defined here
  };
  return UserProduct;
};
