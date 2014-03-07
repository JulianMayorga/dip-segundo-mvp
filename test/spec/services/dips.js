'use strict';

describe('Service: Dips', function () {

  // load the service's module
  beforeEach(module('anotableApp'));

  // instantiate service
  var Dips,
  Dip;

  beforeEach(inject(function (_Dips_, _Dip_) {
    Dips = _Dips_;
    Dip = _Dip_;
  }));

  describe('count', function () {
    it('deberia devolver la cantidad de dips', function () {
      expect(Dips.count()).toBe(3);
    });
  });

  describe('add', function () {
    it('deberia agregar dips', function () {
      var dip = new Dip('Hola mundo', '<div>Hola</div>');
      expect(Dips.count()).toBe(3);
      Dips.add(dip);
      expect(Dips.count()).toBe(4);
    });
  });

  describe('get', function () {
    it('deberia devolver dip por id', function () {
      var dip = new Dip('Hola mundo', '<div>Hola</div>');
      Dips.add(dip);
      var resultado = Dips.get(dip.id);
      expect(resultado).toEqual(dip);
    });
  });

  describe('all', function () {
    it('deberia devolver todos los dips', function () {
      // App crea 3 dips al comenzar
      expect(Dips.all().length).toBe(3);
    });
  });

});
