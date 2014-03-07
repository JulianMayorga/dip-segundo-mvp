'use strict';

angular.module('anotableApp')
  .controller('DipCtrl', function ($scope, $routeParams, Dips) {
    var dip = Dips.get($routeParams.dipId);
    $scope.html = dip.html;
    $scope.css = dip.css;
    $scope.js = dip.js;
  });
