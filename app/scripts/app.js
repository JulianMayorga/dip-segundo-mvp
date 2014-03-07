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
    css: '.mundo {display:block}',
    js: 'console.log("hola");'
  };
  var dipUno = new Dip('Hola Mundo', codigoUno);
  var dipDos = new Dip('FizzBuzz', {html: '<h1>FizzBuzz</h1>', css: '', js: ''});
  var dipTres = new Dip('Bubble sort', {html: '<h1>Bubble Sort</h1>', css: '', js: ''});
  Dips.add(dipUno);
  Dips.add(dipDos);
  Dips.add(dipTres);
});
