"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ models }) {}
  }
  Like.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Users",
        },
        onDelete: "cascade",
      },
      teaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Teas",
        },
        onDelete: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
