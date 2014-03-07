'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('anotableApp', function ($provide) {
    DipMock = jasmine.createSpy('Dip');
    $provide.value('Dip', DipMock);
  }));

  var MainCtrl,
    scope,
    DipMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  xit('deberia tener el codigo ejemplo', function () {
    expect(scope.html).toBeDefined();
    expect(scope.js).toBeDefined();
    expect(scope.css).toBeDefined();
  });

  it('deberia tener tres dips', function () {
    expect(DipMock).toHaveBeenCalled();
    expect(DipMock.callCount).toBe(3);
  });
});
