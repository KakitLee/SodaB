(function() {
  'use strict';

  angular
    .module('sodaB')
    .constant('CONT', {
      SERVER: 'http://localhost:8080',
      FIEL_UPLOAD_CERTIFICATE: '/api/apns/file-upload/certificate',
      FIEL_UPLOAD_KEY:'/api/apns/file-upload/key',
      NOTIFICATION_SEND:'/api/apns/send-message'

  });


})();
