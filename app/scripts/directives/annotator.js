'use strict';

angular.module('anotableApp')
.directive('annotator', function () {
  return {
    restrict: 'A',
    link: function postLink(scope, element) {
      var initialized = false;

      function initialize () {
        if (initialized !== true) {
          element.annotator().annotator('addPlugin', 'Touch');
          initialized = true;
        }
      }

      setTimeout(initialize);
    }
  };
});
