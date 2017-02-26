(function() {
  'use strict';

  angular
    .module('sodaB')
    .controller('ApplicationController', ApplicationController);

  // function ApplicationController($scope) {
  //
  //   $scope.creationDate = 1487841982342;
  // }

  /** @ngInject */
  function ApplicationController(){
    var vm = this;

    vm.creationDate = 1487841982342;
  }
})();
