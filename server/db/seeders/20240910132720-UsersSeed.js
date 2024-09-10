"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Natasha",
          email: "natasha@mail.ru",
          password: await bcrypt.hash("123", 8),
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXx2xFk_wEb1hLQoDo4Ar3YbhosCPyOCfOgA&s",
          isAdmin: true,
        },
        {
          name: "Kostislav",
          email: "kostislav_ne@mail.ru",
          password: await bcrypt.hash("123", 8),
          avatar:
            "https://creatorset.com/cdn/shop/files/Screenshot_2024-04-24_173231_1114x.png?v=1713973029",
          isAdmin: false,
        },
        {
          name: "GegorGan",
          email: "egor_ne@mail.ru",
          password: await bcrypt.hash("123", 8),
          avatar: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
          isAdmin: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
