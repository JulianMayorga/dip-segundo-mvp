'use strict';

angular.module('anotableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.html =
      '<pre>\n' +
      '  <code>\n' +
      '    <div>Hola Mundo</div>\n'+
      '  </code>\n' +
      '</pre>';
    $scope.js = 'console.log("navespacial")';
    $scope.css = '.annotator-outer {\n' +
      '  white-space: normal;\n' +
      '}';
  });
