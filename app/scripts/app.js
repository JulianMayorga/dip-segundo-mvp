'use strict';

angular.module('anotableApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'hljs',
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
