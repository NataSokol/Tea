"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: "Likes",
        foreignKey: "teaId",
      });
      this.belongsToMany(models.User, {
        through: "Comments",
        foreignKey: "teaId",
      });
      this.hasMany(models.Like, {
        foreignKey: "teaId",
        as: "TeaLikes",
      });
      this.hasMany(models.Comment, {
        foreignKey: "teaId",
        as: "TeaComms",
      });
    }
  }
  Tea.init(
    {
      title: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      place: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        defaultValue: "https://i.pinimg.com/564x/0d/82/19/0d8219115f72a76aaec8f97f61db1ac9.jpg",
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      comm: {
        type: DataTypes.TEXT,
      },
      coordX: {
        defaultValue: 37.6173,
        type: DataTypes.FLOAT,

      },
      coordY: {
        defaultValue: 55.7558,
        type: DataTypes.FLOAT,

      },

    },
    {
      sequelize,
      modelName: "Tea",
    }
  );
  return Tea;
};
