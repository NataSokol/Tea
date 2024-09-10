"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Likes",
      [
        {
          userId: 1,
          teaId: 1,
        },
        {
          userId: 1,
          teaId: 2,
        },
        {
          userId: 1,
          teaId: 3,
        },
        {
          userId: 1,
          teaId: 4,
        },
        {
          userId: 1,
          teaId: 5,
        },
        {
          userId: 2,
          teaId: 6,
        },
        {
          userId: 2,
          teaId: 7,
        },
        {
          userId: 2,
          teaId: 8,
        },
        {
          userId: 2,
          teaId: 9,
        },
        {
          userId: 2,
          teaId: 10,
        },
        {
          userId: 3,
          teaId: 11,
        },
        {
          userId: 3,
          teaId: 12,
        },
        {
          userId: 3,
          teaId: 13,
        },
        {
          userId: 3,
          teaId: 14,
        },
        {
          userId: 3,
          teaId: 15,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Likes", null, {});
  },
};
