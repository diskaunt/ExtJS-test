/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',

  productTabCounter: 1,

  onProductAdded: function (button) {
    var mainTabs = button.up('app-main').down('tabpanel');
    if (mainTabs) {
      var newTabId = 'productTab-' + Ext.id();
      var newTab = mainTabs.add({
        xtype: 'panel',
        title: 'Товары ',
        closable: true,
        id: newTabId,
        layout: 'fit',

        items: [{ xtype: 'mainlist' }],
      });
    }
  },

  onLogout: function () {
    // Remove the localStorage key/value
    localStorage.removeItem('LoggedIn');

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window
    Ext.widget('login');
  },

  onFilterIdField: function (field, e) {
    var grid = field.up('gridpanel');
    var store = grid.getStore();

    if (e.getKey() !== e.ENTER) return;
    if (field.getValue()) {
      store.addFilter({
        property: 'ID',
        value: field.getValue(),
        operator: '=',
      });
    } else {
      store.removeFilter('ID');
    }
  },

  onFilterDscrField: function (field, e) {
    var grid = field.up('gridpanel');
    var store = grid.getStore();

    if (e.getKey() !== e.ENTER) return;
    if (field.getValue()) {
      store.addFilter({
        property: 'description',
        value: field.getValue(),
        operator: 'like',
      });
    } else {
      store.removeFilter('description');
    }
  },

  onProductSelected: function (grid, td, index, record) {
    if (!record) return;

    var productCard = Ext.create({
      xtype: 'window',
      title: 'Карточка товара: ' + record.get('name'),
      width: 500,
      layout: 'fit',
      items: {
        xtype: 'productcard',
      },
    });

    var productForm = productCard.down('productcard');

    Boolean(productForm) && productForm.loadRecord(record);

    productCard.show();
  },

  onSaveProduct: function (button) {
    var form = button.up('form'),
      record = form.getRecord(),
      values = form.getValues();

    if (!form.isValid()) return;

    if (
      record.data.price !== values.price ||
      record.data.quantity !== values.quantity
    ) {
      Ext.Msg.alert('', 'Данные изменены');
    }

    record.set(values);
    form.updateRecord(record);
    button.up('window').close();
  },
});
