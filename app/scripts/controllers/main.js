'use strict';

angular.module('anotableApp')
  .controller('MainCtrl', function ($scope, Dip, Dips) {
    /*
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
       */

    $scope.dips = Dips.all();
  });
