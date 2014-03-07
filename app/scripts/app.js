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
  .otherwise({
    redirectTo: '/'
  });
});
