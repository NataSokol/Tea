"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Teas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      place: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img: {
        defaultValue: "https://i.pinimg.com/564x/0d/82/19/0d8219115f72a76aaec8f97f61db1ac9.jpg",
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      comm: {
        type: Sequelize.TEXT,
      },
      coordX: {
        type: Sequelize.FLOAT,

      },
      coordY: {
        type: Sequelize.FLOAT,

      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Teas");
  },
};
