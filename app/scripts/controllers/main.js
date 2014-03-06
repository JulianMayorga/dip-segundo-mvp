'use strict';

angular.module('anotableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.code =
      '<pre>\n' +
      '  <code>\n' +
      '    <div>Hola Mundo</div>\n'+
      '  </code>\n' +
      '</pre>';
  });
