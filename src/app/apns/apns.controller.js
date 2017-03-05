(function (){
  'user strict'

  angular
    .module('sodaB')
    .controller('ApnsController', ApnsController);

  function ApnsController($http, $log, CONT) {
    var vm = this; //$scope
    $log.log('init apns controller');
    vm.version = "0.0.1";
    vm.date = "25 Feb 2017";
    vm.author = "Jiajie Li";
    vm.certificateInput = null;
    vm.keyInput = null;
    vm.data = {
      isProduction: "false",
      message: "This is a test message from the world first FREE APNS",
    };

    vm.init = function () {
      vm.certificateInput = $("#input-certificate").fileinput({
        uploadUrl: CONT.SERVER + CONT.FIEL_UPLOAD_CERTIFICATE, // server upload action
        uploadAsync: true
      });
      vm.keyInput = $("#input-key").fileinput({
        uploadUrl: CONT.SERVER + CONT.FIEL_UPLOAD_KEY, // server upload action
        uploadAsync: true
      });

      vm.certificateInput.on('change', uploadCertificate);
      vm.certificateInput.on('filepreupload', checkExtension);
      vm.certificateInput.on('filecustomerror', function(){
        vm.certificateInput.fileinput('unlock').fileinput('enable');
        UIkit.notify("<i class='uk-icon-exclamation'></i> Invalid file format, please make sure the extension is pem.", {pos:'bottom-right', status:'danger'})
      });
      vm.certificateInput.on('fileuploaded', fileuploaded);

      vm.keyInput.on('change', uploadKey);
      vm.keyInput.on('filepreupload', checkExtension);
      vm.keyInput.on('filecustomerror', function(){
        vm.keyInput.fileinput('unlock').fileinput('enable');
        UIkit.notify("<i class='uk-icon-exclamation'></i> Invalid file format, please make sure the extension is pem.", {pos:'bottom-right', status:'danger'})
      });
      vm.keyInput.on('fileuploaded', fileuploaded);
    };

    vm.submit = function() {
      console.log('request = ', vm.data);
      if(!validation()){
        UIkit.notify('Imcomplete form', {pos:'bottom-right', status:'danger'});
        return;
      }

      $http.post(CONT.SERVER + CONT.NOTIFICATION_SEND, vm.data)
                  .success(function (data, status, headers) {
                     UIkit.notify("<i class='uk-icon-check'></i> " + data.message, {pos:'bottom-right', status:'success'});
                  })
                  .error(function (data) {
                       UIkit.notify("<i class='uk-icon-close'></i> " + data.message, {pos:'bottom-right', status:'danger'});
                  });
    }

    function uploadCertificate(){
      vm.certificateInput.fileinput("upload");
    }

    function uploadKey() {
      vm.keyInput.fileinput("upload");
    }

    function checkExtension(event, data){
      var check = function(filename) {
         var name = filename.split('.');
         if(name.length < 2){
           return false
         }
         var extension = name[name.length - 1];
         if(extension === 'pem'){
           return true;
         }
         return false;
      }
      if (check(data.filenames[0]) === false) {
        return {
            message: 'Invalid file format'
        };
      }
    }

    function fileuploaded(event, data){
      var filename = data.response.filename;
      console.log(filename);
      if(filename.indexOf('certificate') > -1){
        vm.data.certificateName = filename;
      }else{
        vm.data.keyName = filename;
      }
    }

    function validation(){
      if(vm.data){
        if(vm.data.isProduction !== undefined &&
          vm.data.deviceToken !== undefined &&
          vm.data.certificateName !== undefined &&
          vm.data.keyName !== undefined
        )
        return true;
      }
      return false;
    }

    vm.init();

  }


})();
