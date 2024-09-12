"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teas",
      [
        {
          title: "Green Tea",
          place: "China",
          img: "https://example.com/greentea.jpg",
          description: "A refreshing tea made from unoxidized leaves, known for its health benefits.",
          comm: "Great for boosting metabolism.",
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954
        },
        {
          title: "Black Tea",
          place: "India",
          img: "https://example.com/blacktea.jpg",
          description: "A strong, fully oxidized tea with a robust flavor, often consumed with milk.",
          comm: "Perfect for a morning boost.",
          coordX: 20.5937, // Примерные координаты для Индии
          coordY: 78.9629
        },
        {
          title: "Oolong Tea",
          place: "Taiwan",
          img: "https://example.com/oolongtea.jpg",
          description: "Partially fermented tea with complex flavors that range from sweet to floral.",
          comm: "A good balance between green and black tea.",
          coordX: 23.6978, // Примерные координаты для Тайваня
          coordY: 120.9605
        },
        {
          title: "White Tea",
          place: "China",
          img: "https://example.com/whitetea.jpg",
          description: "Delicate tea made from young leaves, minimal processing, and rich in antioxidants.",
          comm: "Best enjoyed without sweeteners.",
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954
        },
        {
          title: "Herbal Tea",
          place: "Global",
          img: "https://example.com/herbaltea.jpg",
          description: "A variety of teas made from herbs, flowers, and fruits rather than tea leaves.",
          comm: "Great for relaxation and sleep.",
          coordX: 0, // Примерные координаты для глобального местоположения
          coordY: 0
        },
        {
          title: "Chai",
          place: "India",
          img: "https://example.com/chai.jpg",
          description: "A spiced tea made with black tea, milk, and a blend of aromatic spices.",
          comm: "A perfect afternoon pick-me-up.",
          coordX: 20.5937, // Примерные координаты для Индии
          coordY: 78.9629
        },
        {
          title: "Matcha",
          place: "Japan",
          img: "https://example.com/matcha.jpg",
          description: "A finely ground powder of specially grown and processed green tea leaves.",
          comm: "Rich in antioxidants and provides a calm energy boost.",
          coordX: 36.2048, // Примерные координаты для Японии
          coordY: 138.2529
        },
        {
          title: "Pu-erh Tea",
          place: "China",
          img: "https://example.com/puerhtea.jpg",
          description: "Fermented tea known for its earthy, mellow taste and digestive benefits.",
          comm: "Great for post-meal digestion.",
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954
        },
        {
          title: "Jasmine Tea",
          place: "China",
          img: "https://example.com/jasminetea.jpg",
          description: "Green tea scented with jasmine blossoms, offering a delicate floral fragrance.",
          comm: "Ideal for relaxation.",
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954
        },
        {
          title: "Earl Grey",
          place: "United Kingdom",
          img: "https://example.com/earlgrey.jpg",
          description: "A black tea flavored with the oil of bergamot, a type of citrus fruit.",
          comm: "A classic choice for tea lovers.",
          coordX: 55.3781, // Примерные координаты для Великобритании
          coordY: -3.4360
        },
        {
          title: "Rooibos Tea",
          place: "South Africa",
          img: "https://example.com/rooibostea.jpg",
          description: "Naturally caffeine-free, rooibos is rich in antioxidants with a sweet, nutty flavor.",
          comm: "Great alternative to black tea.",
          coordX: -30.5595, // Примерные координаты для ЮАР
          coordY: 22.9375
        },
        {
          title: "Lapsang Souchong",
          place: "China",
          img: "https://example.com/lapsang.jpg",
          description: "A distinctive black tea that is smoked over pinewood fires, giving it a bold flavor.",
          comm: "Perfect for those who enjoy smoky flavors.",
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954
        },
        {
          title: "Chamomile Tea",
          place: "Moscow",
          img: "https://example.com/chamomile.jpg",
          description: "A soothing herbal tea known for its calming effects, often used to aid sleep.",
          comm: "Best consumed before bedtime.",
          coordX: 37.6173, // Примерные координаты для глобального местоположения
          coordY: 55.7558
        },
        {
          title: "Peppermint Tea",
          place: "Spb",
          img: "https://example.com/peppermint.jpg",
          description: "An invigorating herbal tea made from peppermint leaves, known for its digestive benefits.",
          comm: "Great for soothing upset stomachs.",
          coordX: 30.3158, // Примерные координаты для глобального местоположения
          coordY: 59.9342
        },
        {
          title: "Yerba Mate",
          place: "South America",
          img: "https://example.com/yerbamate.jpg",
          description: "A traditional South American drink made from the leaves of the mate plant, offering a caffeine boost.",
          comm: "Popular among athletes for energy and focus.",
          coordX: -14.2350, // Примерные координаты для Южной Америки
          coordY: -51.9253
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
