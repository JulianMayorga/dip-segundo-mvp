'use strict';

angular.module('anotableApp')
  .controller('MainCtrl', function ($scope, Dip) {
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
    $scope.dips = [];
    $scope.dips.push(new Dip('Hola Mundo', '<div>Hola mundo</div>'));
    $scope.dips.push(new Dip('FizzBuzz', '<h1>FizzBuzz</h1>'));
    $scope.dips.push(new Dip('Bubble sort', '<h1>Bubble Sort</h1>'));
  });
