(function() {
  'use strict';

  angular
    .module('sodaB')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, webDevTec, toastr, API) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.showToastr = showToastr;
    vm.accountURL = API.CONFIGURATION;
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
