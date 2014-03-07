'use strict';

describe('Controller: DipCtrl', function () {

  // load the controller's module
  beforeEach(module('anotableApp', function ($provide) {
    DipsMock = jasmine.createSpy('Dips');
    DipsMock.get = function (){
      return {
        html: '<div></div>',
        css: '.class {}',
        js: 'console.log()'
      };
    };
    spyOn(DipsMock, 'get').andCallThrough();
    DipsMock.add = function (){};
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
    expect(scope.html).toEqual('<div></div>');
  });
});
