(function() {
  'use strict';

  angular
    .module('sodaB')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/apns', {
        templateUrl: 'app/apns/apns.html',
        controller: 'ApnsController',
        controllerAs: 'apns'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
