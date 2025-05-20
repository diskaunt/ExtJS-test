Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.container.Container',
  xtype: 'app-main',
  requires: ['MyApp.view.main.MainController', 'MyApp.view.main.MainModel'],
  controller: 'main',
  plugins: 'viewport',
  viewModel: {
    type: 'main',
		data: {
			windowOpen: false,
		},
  },
  layout: {
    type: 'border',
  },

  items: [
    {
      xtype: 'panel',
      region: 'north',
      height: 80,
      bodyStyle:
        'background-color: #35A0DE; display: flex; align-content: center; color: white; padding: 10px 50px;',
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
