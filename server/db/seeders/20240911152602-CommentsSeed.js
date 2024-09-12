"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          teaId: 1,
          comm: "Delicious! It's good. Not that it tastes good, but it's basically good.",
        },
        {
          userId: 1,
          teaId: 2,
          comm: "Not bad, could be better. The aroma is nice, but the flavor lacks depth.",
        },
        {
          userId: 1,
          teaId: 3,
          comm: "A decent tea, but nothing extraordinary. Feels a bit too bland.",
        },
        {
          userId: 1,
          teaId: 4,
          comm: "Has a unique taste, but not one I'd prefer. A bit too bitter.",
        },
        {
          userId: 1,
          teaId: 5,
          comm: "Refreshing, with a hint of sweetness. Could use a stronger flavor though.",
        },
        {
          userId: 2,
          teaId: 1,
          comm: "Surprisingly smooth with a subtle sweetness. Perfect for a calm evening.",
        },
        {
          userId: 3,
          teaId: 1,
          comm: "A bit too strong for my taste, but it might be great for those who enjoy bold flavors.",
        },
        {
          userId: 3,
          teaId: 2,
          comm: "Light and refreshing, but I wish it had more complexity in the aftertaste.",
        },
        {
          userId: 1,
          teaId: 6,
          comm: "Delicious! It's good. Not that it tastes good, but it's basically good.",
        },
        {
          userId: 2,
          teaId: 7,
          comm: "Not bad, could be better. The aroma is nice, but the flavor lacks depth.",
        },
        {
          userId: 3,
          teaId: 8,
          comm: "A decent tea, but nothing extraordinary. Feels a bit too bland.",
        },
        {
          userId: 1,
          teaId: 9,
          comm: "A bold flavor with a strong earthy aftertaste. Not for everyone, but I enjoyed it.",
        },
        {
          userId: 2,
          teaId: 10,
          comm: "A smooth and creamy texture. Great for a winter day, but could be richer.",
        },
        {
          userId: 3,
          teaId: 11,
          comm: "Surprisingly refreshing, but lacks a distinctive flavor to stand out.",
        },
        {
          userId: 1,
          teaId: 12,
          comm: "A perfect balance between sweet and bitter. This one’s definitely a favorite!",
        },
        {
          userId: 2,
          teaId: 13,
          comm: "Light and fragrant, but it feels a little watered down for my taste.",
        },
        {
          userId: 3,
          teaId: 14,
          comm: "An interesting mix of spices, though it leaves a slightly bitter aftertaste.",
        },
        {
          userId: 1,
          teaId: 15,
          comm: "A refreshing and vibrant tea, though I’d love a stronger aroma.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
