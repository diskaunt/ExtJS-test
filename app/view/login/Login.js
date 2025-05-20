Ext.define('MyApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: ['MyApp.view.login.LoginController', 'Ext.form.Panel'],

  controller: 'login',
  bodyPadding: 10,
  title: 'Авторизация',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [
      {
        xtype: 'textfield',
        name: 'Логин',
        fieldLabel: 'Username',
        allowBlank: false,
        reference: 'usernameField',
      },
      {
        xtype: 'textfield',
        name: 'Пароль',
        inputType: 'password',
        fieldLabel: 'Password',
        allowBlank: false,
        reference: 'passwordField',
      },
      {
        xtype: 'displayfield',
        hideEmptyLabel: false,
        value: 'Введите ваш пароль',
      },
    ],
    buttons: [
      {
        text: 'Войти',
        formBind: true,
        listeners: {
          click: 'onLoginClick',
        },
      },
    ],
  },
});
