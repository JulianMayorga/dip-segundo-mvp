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
  var dipUno = new Dip('Hola Mundo', '<div>Hola mundo</div>');
  var dipDos = new Dip('FizzBuzz', '<h1>FizzBuzz</h1>');
  var dipTres = new Dip('Bubble sort', '<h1>Bubble Sort</h1>');
  Dips.add(dipUno);
  Dips.add(dipDos);
  Dips.add(dipTres);
});
