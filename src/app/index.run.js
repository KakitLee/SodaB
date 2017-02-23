(function() {
  'use strict';

  angular
    .module('sodaB')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
