(function() {
  'use strict';

  angular
    .module('sodaB')
    .constant('API', {

  HTTP: {
    DEFAULTS: {
      timeout: 60000
    }
  },
  CONFIGURATION: '/api/athena/scenarios/{{scenario}}/config'
});
})();
