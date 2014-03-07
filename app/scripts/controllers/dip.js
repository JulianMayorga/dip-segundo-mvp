'use strict';

angular.module('anotableApp')
  .controller('DipCtrl', function ($scope, $routeParams, Dips) {
    Dips.get($routeParams.dipId);
  });
