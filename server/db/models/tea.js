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
        defaultValue:
          "https://www.newshub.co.nz/home/lifestyle/2019/08/the-top-five-cat-memes-of-all-time-rated/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1565234972425/KNOWYOURMEME-sad-cat-crying-1120.jpg",
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      comm: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Tea",
    }
  );
  return Tea;
};
