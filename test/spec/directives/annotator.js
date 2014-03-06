'use strict';

describe('Directive: annotator', function () {

  // load the directive's module
  beforeEach(module('anotableApp'));

  var element,
    scope,
    $window;

  beforeEach(inject(function ($rootScope, _$window_) {
    scope = $rootScope.$new();
    $window = _$window_;
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    var spy = spyOn($window.$.fn, 'annotator');
    element = angular.element('<div annotator></div>');
    element = $compile(element)(scope);
    expect(spy).toHaveBeenCalled();
  }));

});
