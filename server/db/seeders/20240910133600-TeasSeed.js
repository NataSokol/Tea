"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teas",
      [
        {
          title: 'Green Tea',
          place: 'China',
          img: 'https://arysahulatbazar.pk/wp-content/uploads/2024/02/image-24.jpeg',
          description:
            'Освежающий чай из неокисленных листьев, известный своими полезными свойствами для здоровья, дарящий спокойствие.',
          comm: 'Отлично подходит для ускорения метаболизма.',
          coordX: 116.3970,
          coordY: 39.9042,
        },
        {
          title: 'Black Tea',
          place: 'India',
          img: 'https://mixsp.ru/files/b49/b49161f01b5832fb44987da07e062ef0.png',
          description:
            'Крепкий, полностью окисленный чай с насыщенным вкусом, часто употребляется с молоком, создающий эффект расслабления.',
          comm: 'Идеален для утреннего заряда.',
          coordX: 77.9629,
          coordY: 28.5937,
        },
        {
          title: 'Oolong Tea',
          place: 'Taiwan',
          img: 'https://www.deloks.ru/upload/iblock/e40/i6p1072dvpho3pd8r0y4pk4tu8zebra6/chay_saito_milky_oolong_zelenyy_25_paketikov_7_full.jpg',
          description:
            'Частично ферментированный чай с комплексным вкусом от сладкого до цветочного, дарящий ощущения спокойствия.',
          comm: 'Хороший баланс между зеленым и черным чаем.',
          coordX: 120.9605,
          coordY: 23.6978,
        },
        {
          title: 'White Tea',
          place: 'Russia',
          img: 'https://avatars.mds.yandex.net/i?id=bde9888988200904f0727d083014d8da_l-9211239-images-thumbs&n=13',
          description:
            'Нежный чай из молодых листьев, минимально обработанный и богатый антиоксидантами, создающий мягкий эффект расслабления, схожий с каннабисом.',
          comm: 'Лучше всего наслаждаться без подсластителей.',
          coordX: 60.5833,
          coordY: 56.8389,
        },
        {
          title: 'Herbal Tea',
          place: 'Venesualla',
          img: 'https://s3.images-iherb.com/tra/tra00050/l/5.jpg',
          description:
            'Разнообразие чаев из трав, цветов и фруктов вместо чайных листьев, способных подарить расслабление.',
          comm: 'Отлично подходит для релаксации и сна.',
          coordX: -66.9036,
          coordY: 10.4918,
        },
        {
          title: 'Chai',
          place: 'Kazahstan',
          img: 'https://basket-02.wbbasket.ru/vol284/part28464/28464583/images/big/1.jpg',
          description:
            'Пряный чай на основе черного чая, молока и смеси ароматных специй, вызывающий ощущения спокойствия.',
          comm: 'Идеален для поднятия настроения днем.',
          coordX: 76.9450,
          coordY: 43.2220,
        },
        {
          title: 'Matcha',
          place: 'Japan',
          img: 'https://cdn.100sp.ru/pictures/451856663',
          description:
            'Тщательно измельченный порошок из специально выращенных листьев зеленого чая, дарящий энергию и расслабление.',
          comm: 'Богат антиоксидантами и обеспечивает спокойный заряд энергии.',
          coordX: 139.6917,
          coordY: 35.6895,
        },
        {
          title: 'Pu-erh Tea',
          place: 'USA',
          img: 'https://s3.images-iherb.com/num/num10440/l/1.jpg',
          description:
            'Ферментированный чай с землистым, мягким вкусом и пользой для пищеварения, создающий успокаивающий эффект.',
          comm: 'Отлично подходит для улучшения пищеварения после еды.',
          coordX: -74.0060,
          coordY: 40.7128,
        },
        {
          title: 'Jasmine Tea',
          place: 'Canada',
          img: 'https://cdn.100sp.ru/pictures/847188554',
          description:
            'Зеленый чай с ароматом цветков жасмина, предлагающий нежный цветочный аромат и расслабление.',
          comm: 'Идеален для релаксации.',
          coordX: -122.9154,
          coordY: 49.1417,
        },
        {
          title: 'Earl Grey',
          place: 'United Kingdom',
          img: 'https://avatars.mds.yandex.net/i?id=e0bda788074da76148ea5309b00f032f583a3028-9234614-images-thumbs&n=13',
          description:
            'Черный чай с ароматом масла бергамота, вида цитрусового фрукта, дарящий утонченный вкус и ощущение спокойствия.',
          comm: 'Классический выбор для любителей чая.',
          coordX: 50.0880,
          coordY: 14.4208,
        },
        {
          title: 'Rooibos Tea',
          place: 'South Africa',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXWtedjDzvYukl4FMfVGnExlILL9DCtxOhw&s',
          description:
            'Естественно без кофеина, ройбуш богат антиоксидантами и имеет сладкий, ореховый вкус, создавая расслабляющий эффект.',
          comm: 'Отличная альтернатива черному чаю.',
          coordX: 25.9075,
          coordY: -24.6595,
        },
        {
          title: 'Lapsang Souchong',
          place: 'Australia',
          img: 'https://cdn.100sp.ru/pictures/170082625',
          description:
            'Уникальный черный чай, копченный на сосновых дровах, с ярким вкусом, дарящий глубокое расслабление.',
          comm: 'Идеален для тех, кто ценит дымные вкусы.',
          coordX: 149.1354,
          coordY: -35.2817,
        },
        {
          title: 'Chamomile Tea',
          place: 'Moscow',
          img: 'https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/24245467',
          description:
            'Успокаивающий травяной чай, известный своим расслабляющим эффектом, часто используется для улучшения сна, даря спокойствие.',
          comm: 'Лучше всего потреблять перед сном.',
          coordX: 37.6173,
          coordY: 55.7558,
        },
        {
          title: 'Peppermint Tea',
          place: 'Spb',
          img: 'https://ld-prestashop.template-help.com/prestashop_64651/img/p/1/3/7/137-tm_thickbox_default.jpg',
          description:
            'Бодрящий травяной чай из листьев мяты перечной, известный своими преимуществами для пищеварения, дарящий освежающее расслабление.',
          comm: 'Отлично успокаивает расстроенный желудок.',
          coordX: 30.3158,
          coordY: 59.9342,
        },
        {
          title: 'Yerba Mate',
          place: 'Italia',
          img: 'https://avatars.mds.yandex.net/i?id=cf2397ac1fe0ca965e7c733673d0589c41a27747-10261182-images-thumbs&n=13  ',
          description:
            'Традиционный южноамериканский напиток из листьев растения мате, обеспечивающий заряд кофеина и мягкое расслабление.',
          comm: 'Популярен среди атлетов для энергии и фокуса.',
          coordX: 12.5101,
          coordY: 41.8900,
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
