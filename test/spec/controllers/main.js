'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('anotableApp', function ($provide) {
    DipMock = jasmine.createSpy('Dip');
    DipsMock = jasmine.createSpyObj('Dips', ['add', 'all']);
    $provide.value('Dip', DipMock);
    $provide.value('Dips', DipsMock);
  }));

  var MainCtrl,
    scope,
    DipMock,
    DipsMock;

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
    expect(DipsMock.add).toHaveBeenCalled();
    expect(DipsMock.add.callCount).toBe(3);
  });

  it('deberia agregar todos los dips al scope', function () {
    expect(DipsMock.all).toHaveBeenCalled();
  });
});
