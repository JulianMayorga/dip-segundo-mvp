'use strict';

describe('Controller: DipCtrl', function () {

  // load the controller's module
  beforeEach(module('anotableApp', function ($provide) {
    DipsMock = jasmine.createSpyObj('Dips', ['get', 'add']);
    $provide.value('Dips', DipsMock);
  }));

  var DipCtrl,
    scope,
    DipsMock,
    routeParams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    routeParams = { dipId: 1 };
    DipCtrl = $controller('DipCtrl', {
      $scope: scope,
      $routeParams : routeParams
    });
  }));

  it('deberia sacar al dip del servicio dips', function () {
    expect(DipsMock.get).toHaveBeenCalledWith(1);
  });
});
