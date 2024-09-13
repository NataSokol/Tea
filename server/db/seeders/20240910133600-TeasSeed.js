'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Teas',
      [
        {
          title: 'Green Tea',
          place: 'China',
          img: 'https://arysahulatbazar.pk/wp-content/uploads/2024/02/image-24.jpeg',
          description:
            'A refreshing tea made from unoxidized leaves, known for its health benefits.',
          comm: 'Great for boosting metabolism.',
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954,
        },
        {
          title: 'Black Tea',
          place: 'India',
          img: 'https://mixsp.ru/files/b49/b49161f01b5832fb44987da07e062ef0.png',
          description:
            'A strong, fully oxidized tea with a robust flavor, often consumed with milk.',
          comm: 'Perfect for a morning boost.',
          coordX: 20.5937, // Примерные координаты для Индии
          coordY: 78.9629,
        },
        {
          title: 'Oolong Tea',
          place: 'Taiwan',
          img: 'https://www.deloks.ru/upload/iblock/e40/i6p1072dvpho3pd8r0y4pk4tu8zebra6/chay_saito_milky_oolong_zelenyy_25_paketikov_7_full.jpg',
          description:
            'Partially fermented tea with complex flavors that range from sweet to floral.',
          comm: 'A good balance between green and black tea.',
          coordX: 23.6978, // Примерные координаты для Тайваня
          coordY: 120.9605,
        },
        {
          title: 'White Tea',
          place: 'China',
          img: 'https://avatars.mds.yandex.net/i?id=bde9888988200904f0727d083014d8da_l-9211239-images-thumbs&n=13',
          description:
            'Delicate tea made from young leaves, minimal processing, and rich in antioxidants.',
          comm: 'Best enjoyed without sweeteners.',
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954,
        },
        {
          title: 'Herbal Tea',
          place: 'Global',
          img: 'https://s3.images-iherb.com/tra/tra00050/l/5.jpg',
          description:
            'A variety of teas made from herbs, flowers, and fruits rather than tea leaves.',
          comm: 'Great for relaxation and sleep.',
          coordX: 0, // Примерные координаты для глобального местоположения
          coordY: 0,
        },
        {
          title: 'Chai',
          place: 'India',
          img: 'https://basket-02.wbbasket.ru/vol284/part28464/28464583/images/big/1.jpg',
          description:
            'A spiced tea made with black tea, milk, and a blend of aromatic spices.',
          comm: 'A perfect afternoon pick-me-up.',
          coordX: 20.5937, // Примерные координаты для Индии
          coordY: 78.9629,
        },
        {
          title: 'Matcha',
          place: 'Japan',
          img: 'https://cdn.100sp.ru/pictures/451856663',
          description:
            'A finely ground powder of specially grown and processed green tea leaves.',
          comm: 'Rich in antioxidants and provides a calm energy boost.',
          coordX: 36.2048, // Примерные координаты для Японии
          coordY: 138.2529,
        },
        {
          title: 'Pu-erh Tea',
          place: 'China',
          img: 'https://s3.images-iherb.com/num/num10440/l/1.jpg',
          description:
            'Fermented tea known for its earthy, mellow taste and digestive benefits.',
          comm: 'Great for post-meal digestion.',
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954,
        },
        {
          title: 'Jasmine Tea',
          place: 'China',
          img: 'https://cdn.100sp.ru/pictures/847188554',
          description:
            'Green tea scented with jasmine blossoms, offering a delicate floral fragrance.',
          comm: 'Ideal for relaxation.',
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954,
        },
        {
          title: 'Earl Grey',
          place: 'United Kingdom',
          img: 'https://avatars.mds.yandex.net/i?id=e0bda788074da76148ea5309b00f032f583a3028-9234614-images-thumbs&n=13',
          description:
            'A black tea flavored with the oil of bergamot, a type of citrus fruit.',
          comm: 'A classic choice for tea lovers.',
          coordX: 55.3781, // Примерные координаты для Великобритании
          coordY: -3.436,
        },
        {
          title: 'Rooibos Tea',
          place: 'South Africa',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXWtedjDzvYukl4FMfVGnExlILL9DCtxOhw&s',
          description:
            'Naturally caffeine-free, rooibos is rich in antioxidants with a sweet, nutty flavor.',
          comm: 'Great alternative to black tea.',
          coordX: -30.5595, // Примерные координаты для ЮАР
          coordY: 22.9375,
        },
        {
          title: 'Lapsang Souchong',
          place: 'China',
          img: 'https://cdn.100sp.ru/pictures/170082625',
          description:
            'A distinctive black tea that is smoked over pinewood fires, giving it a bold flavor.',
          comm: 'Perfect for those who enjoy smoky flavors.',
          coordX: 35.8617, // Примерные координаты для Китая
          coordY: 104.1954,
        },
        {
          title: 'Chamomile Tea',
          place: 'Moscow',
          img: 'https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/24245467',
          description:
            'A soothing herbal tea known for its calming effects, often used to aid sleep.',
          comm: 'Best consumed before bedtime.',
          coordX: 37.6173, // Примерные координаты для глобального местоположения
          coordY: 55.7558,
        },
        {
          title: 'Peppermint Tea',
          place: 'Spb',
          img: 'https://ld-prestashop.template-help.com/prestashop_64651/img/p/1/3/7/137-tm_thickbox_default.jpg',
          description:
            'An invigorating herbal tea made from peppermint leaves, known for its digestive benefits.',
          comm: 'Great for soothing upset stomachs.',
          coordX: 30.3158, // Примерные координаты для глобального местоположения
          coordY: 59.9342,
        },
        {
          title: 'Yerba Mate',
          place: 'South America',
          img: 'https://avatars.mds.yandex.net/i?id=cf2397ac1fe0ca965e7c733673d0589c41a27747-10261182-images-thumbs&n=13  ',
          description:
            'A traditional South American drink made from the leaves of the mate plant, offering a caffeine boost.',
          comm: 'Popular among athletes for energy and focus.',
          coordX: -14.235, // Примерные координаты для Южной Америки
          coordY: -51.9253,
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
