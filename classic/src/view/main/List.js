/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',
  requires: ['MyApp.store.Products'],
  title: 'Список товаров',

  store: {
    type: 'Products',
  },

  tbar: [
    {
      xtype: 'form',
      frame: false,
      layout: 'form',
      defaultType: 'textfield',

      items: [
        {
          fieldLabel: 'ID',
          name: 'ID',
          emptyText: 'Введите фильтр...',
          listeners: {
            specialkey: { fn: 'onFilterIdField' },
          },
        },
        {
          fieldLabel: 'Описание',
          name: 'description',
          emptyText: 'Введите фильтр...',
          listeners: {
            specialkey: { fn: 'onFilterDscrField' },
          },
        },
      ],
    },
  ],

  columns: [
    { text: 'ID', dataIndex: 'ID' },
    {
      text: 'Имя',
      dataIndex: 'name',
      flex: 1,
      listeners: { cellclick: 'onProductSelected' },
    },
    { text: 'Описание', dataIndex: 'description', flex: 1 },
    { text: 'Цена', dataIndex: 'price', flex: 1 },
    {
      text: 'Количество',
      dataIndex: 'quantity',
      flex: 1,
      renderer: function (value, metaData) {
        if (Number(value) === 0) {
          metaData.style = 'font-weight: bold; background-color: red;';
          return value;
        }
        return value;
      },
    },
  ],

  dockedItems: [
    {
      xtype: 'pagingtoolbar',
      store: {
        type: 'Products',
      },
      dock: 'bottom',
      displayInfo: true,
    },
  ],

  listeners: {
   cellclick: 'onProductSelected',
  },
});
