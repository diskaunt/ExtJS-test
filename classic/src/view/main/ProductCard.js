Ext.define('MyApp.view.productCard', {
  extend: 'Ext.form.Panel',
  xtype: 'productcard',

  width: 400,
  bodyPadding: 10,
  layout: 'form',

  items: [
    {
      xtype: 'textfield',
      name: 'ID',
      fieldLabel: 'ID',
      readOnly: true,
    },
    {
      xtype: 'textfield',
      name: 'description',
      fieldLabel: 'Наименование',
      readOnly: true,
    },
    {
      xtype: 'numberfield',
      name: 'price',
      fieldLabel: 'Цена',
      minValue: 0,
      decimalPrecision: 2,
      allowBlank: false,
      validator: function (value) {
        if (value < 0) return 'Количество не может быть отрицательным';
        return true;
      },
    },
    {
      xtype: 'numberfield',
      name: 'quantity',
      fieldLabel: 'Количество',
      minValue: 0,
      allowDecimals: 0,
      allowBlank: false,
      validator: function (value) {
        if (value < 0) return 'Количество не может быть отрицательным';
        return true;
      },
    },
  ],

  buttons: [
    {
      text: 'Сохранить',
      handler: 'onSaveProduct',
    },
    {
      text: 'Отмена',
      handler: function () {
        this.up('window').close();
      },
    },
  ],
});
