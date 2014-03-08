'use strict';

angular.module('anotableApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'hljs',
  'ui.bootstrap',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/dip/:dipId', {
    templateUrl: 'views/dip.html',
    controller: 'DipCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.run(function (Dip, Dips) {
  var codigoUno = {
    html: '<div>Hola mundo</div>',
    css: '',
    js: 'console.log("Hola mundo");'
  };
  var dipUno = new Dip('Hola Mundo', codigoUno);
  var dipDos = new Dip('FizzBuzz', {html: '', css: '', js: 'for (var i = 1; i <= 100; i++) {\n' +
                       '  var f = i % 3 == 0, b = i % 5 == 0;\n' +
                       '  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);\n' +
                       '}'});
  var dipTres = new Dip('Bubble sort', {html: '', css: '', js:
  '  function comparator(a, b) {\n' +
    '    return a - b;\n' +
    '  }\n' +
    '\n' +
    '  /**\n' +
    '   * The bubblesort algorithm. Complexity O(n^2).\n' +
    '   *\n' +
    '   * @public\n' +
    '   * @param {array} array Input array\n' +
    '   * @returns {array} array Sorted array\n' +
    '   */\n' +
    '  function bubbleSort(array, cmp) {\n' +
    '    cmp = cmp || comparator;\n' +
    '    var temp;\n' +
    '    for (var i = 0; i < array.length; i += 1) {\n' +
    '      for (var j = i; j > 0; j -= 1) {\n' +
    '        if (cmp(array[j], array[j - 1]) < 0) {\n' +
    '          temp = array[j];\n' +
    '          array[j] = array[j - 1];\n' +
    '          array[j - 1] = temp;\n' +
    '        }\n' +
    '      }\n' +
    '    }\n' +
    '    return array;\n' +
    '  }\n'
});
  Dips.add(dipUno);
  Dips.add(dipDos);
  Dips.add(dipTres);
});
