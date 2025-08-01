/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
  extend: 'Ext.app.Application',
  name: 'MyApp',

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  stores: [
    // TODO: add global / shared stores here
  ],
  views: ['MyApp.view.login.Login', 'MyApp.view.main.Main'],

  launch: function () {
    var loggedIn;

    // Check to see the current value of the localStorage key

    loggedIn = localStorage.getItem('LoggedIn');
    Ext.widget(loggedIn ? 'app-main' : 'login');
		
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      'Application Update',
      'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  },
});
