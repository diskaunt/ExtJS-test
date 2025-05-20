Ext.define('MyApp.store.Products', {
  extend: 'Ext.data.Store',
  alias: 'store.Products',

  model: 'MyApp.model.Products',

	autoload: true,
  pageSize: 4,
	remoteSort: true,

  data: {
    items: [
      {
        ID: 1,
        name: 'Notebook Lenovo',
        description:
          'Ультрабук Lenovo ThinkPad X1 Carbon Gen 12 с 12-ядерным процессором Intel Core Ultra 7 и ОЗУ 32 ГБ подходит для решения повседневных задач, для игр и работы в мощных графических программах. 14-дюймовый экран дополнен матовым покрытием для устранения бликов от ламп и солнца. Широкий набор портов позволяет подключать модель к проекторам, внешним мониторам и другим устройствам.',
        price: '100',
        quantity: '8',
      },
      {
        ID: 2,
        name: 'Клавиатура ONCLICK',
        description:
          'Клавиатура Oklick 145M выполнена в классическом строгом стиле и имеет полноразмерную раскладку со 104 клавишами.',
        price: '50',
        quantity: '2',
      },
      {
        ID: 3,
        name: 'Сетевой адаптер TP-LINK',
        description:
          'Сетевой адаптер TP-LINK TL-WN881ND - это высокоскоростной адаптер PCI Express, который поддерживает стандарт 802.11n и обеспечивает скорость передачи данных до 300 Мбит/с.',
        price: '7',
        quantity: '0',
      },
      {
        ID: 4,
        name: 'Мышь Logitech',
        description:
          'Мышь Logitech M330 Silent Plus - это беспроводная мышь с технологией Silent Touch, которая обеспечивает тихую работу кнопок и колесика прокрутки. Она имеет эргономичный дизайн и подходит для длительного использования.',
        price: '15',
        quantity: '20',
      },
      {
        ID: 5,
        name: 'Монитор Samsung',
        description:
          'Монитор Samsung U32J59 с диагональю 32 дюйма и разрешением 4K UHD обеспечивает высокое качество изображения, идеальное для работы и игр.',
        price: '250',
        quantity: '5',
      },
      {
        ID: 6,
        name: 'Наушники Sony WH-1000XM5',
        description:
          'Беспроводные наушники Sony WH-1000XM5 с активным шумоподавлением позволяют наслаждаться музыкой без внешних шумов. Время автономной работы — до 30 часов.',
        price: '300',
        quantity: '10',
      },
      {
        ID: 7,
        name: 'Внешний SSD Kingston',
        description:
          'Внешний SSD Kingston XS2000 объемом 1 ТБ обеспечивает высокую скорость передачи данных до 2000 МБ/с и компактные размеры для удобства переноски.',
        price: '120',
        quantity: '15',
      },
      {
        ID: 8,
        name: 'Принтер HP LaserJet Pro',
        description:
          'Принтер HP LaserJet Pro MFP M428fdw — это мощное устройство для офисной работы с функциями печати, сканирования, копирования и факса.',
        price: '350',
        quantity: '3',
      },
    ],
  },

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items',
    },
  },
});
