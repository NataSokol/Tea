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
        defaultValue:
          "https://www.newshub.co.nz/home/lifestyle/2019/08/the-top-five-cat-memes-of-all-time-rated/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1565234972425/KNOWYOURMEME-sad-cat-crying-1120.jpg",
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      comm: {
        type: Sequelize.TEXT,
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
