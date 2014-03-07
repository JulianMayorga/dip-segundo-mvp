'use strict';

angular.module('anotableApp')
  .controller('MainCtrl', function ($scope, Dip, Dips) {
    var dipUno = new Dip('Hola Mundo', '<div>Hola mundo</div>');
    var dipDos = new Dip('FizzBuzz', '<h1>FizzBuzz</h1>');
    var dipTres = new Dip('Bubble sort', '<h1>Bubble Sort</h1>');
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
    Dips.add(dipUno);
    Dips.add(dipDos);
    Dips.add(dipTres);
    $scope.dips = Dips.all();
  });
