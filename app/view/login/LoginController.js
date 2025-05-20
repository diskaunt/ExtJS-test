Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function () {
    // Получаем введённые пользователем данные
    let username = this.lookupReference('usernameField').getValue();
    let password = this.lookupReference('passwordField').getValue();
    // Пример простой проверки (замени на реальный запрос к серверу)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('LoggedIn', true);
      // Remove Login Window
      this.getView().destroy();

      // Add the main view to the viewport
      Ext.widget('app-main');
			return;
    }

    Ext.Msg.alert('Ошибка', 'Неверные логин или пароль');
    return;
  },
});
