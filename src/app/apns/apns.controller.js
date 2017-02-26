(function (){
  'user strict'

  angular
    .module('sodaB')
    .controller('ApnsController', ApnsController);

  function ApnsController($log) {
    var vm = this; //$scope
    $log.log('init');
    vm.version = "0.0.1";
    vm.date = "25 Feb 2017";
    vm.author = "Jiajie Li"

  }


})();
