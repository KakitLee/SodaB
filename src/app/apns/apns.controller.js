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
    vm.author = "Jiajie Li";

    vm.init = function () {
      // initialize with defaults
      $("#input-key").fileinput();
      $("#input-certificate").fileinput();

      // with plugin options
      $("#input-key").fileinput({'showUpload':true, 'previewFileType':'any'});
      $("#input-certificate").fileinput({'showUpload':false, 'previewFileType':'any'});
    };

    vm.init();

  }


})();
