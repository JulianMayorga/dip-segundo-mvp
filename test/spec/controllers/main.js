'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('anotableApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('deberia tener el codigo ejemplo', function () {
    expect(scope.html).toBeDefined();
    expect(scope.js).toBeDefined();
    expect(scope.css).toBeDefined();
  });
});
