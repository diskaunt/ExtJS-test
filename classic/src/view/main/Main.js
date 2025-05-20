Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.container.Container',
  xtype: 'app-main',
  requires: ['MyApp.view.main.MainController', 'MyApp.view.main.MainModel'],
  controller: 'main',
  plugins: 'viewport',
  viewModel: {
    type: 'main',
  },
  layout: {
    type: 'border',
  },

  items: [
    {
      xtype: 'panel', // Панель для заголовка
      region: 'north',
      height: 80, // Высота заголовка
      bodyStyle:
        'background-color: #35A0DE; display: flex; align-content: center; color: white; padding: 10px 50px;', // Примерный стиль синего заголовка
      layout: {
        type: 'hbox',
        align: 'middle',
      },
      items: [
        {
          xtype: 'component',
          html: 'Учет товаров',
          style: 'font-size: 18px; font-weight: bold;',
        },
        {
          xtype: 'button',
          text: 'Товары',
          height: 60,
          margin: '0 10 0 50',
          handler: 'onProductAdded',
        },
        {
          xtype: 'button',
          text: 'Выход',
          height: 60,
          handler: 'onLogout',
        },
      ],
    },
    {
      xtype: 'tabpanel',
      region: 'center',
      bodyStyle: 'background-color: #fff; color: white; padding: 15px;',
      activeTab: 0,

      items: [
        {
          xtype: 'panel',
          title: 'Товары',
          closable: true,
          layout: 'fit',

          items: [
            {
              xtype: 'mainlist',
            },
          ],
        },
      ],
    },
  ],
});
