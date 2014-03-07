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
      expect(Dips.count()).toBe(0);
    });
  });

  describe('add', function () {
    it('deberia agregar dips', function () {
      var dip = new Dip('Hola mundo', '<div>Hola</div>');
      expect(Dips.count()).toBe(0);
      Dips.add(dip);
      expect(Dips.count()).toBe(1);
    });
  });

  describe('get', function () {
    it('deberia devolver dip por id', function () {
      var dip = new Dip('Hola mundo', '<div>Hola</div>');
      dip.id = 1;
      Dips.add(dip);
      var resultado = Dips.get(dip.id);
      expect(resultado).toEqual(dip);
    });
  });

  describe('all', function () {
    it('deberia devolver todos los dips', function () {
      var dip = new Dip('Hola mundo', '<div>Hola</div>');
      var otroDip = new Dip('Chau mundo', '<div>Chau</div>');
      Dips.add(dip);
      Dips.add(otroDip);
      expect(Dips.all().length).toBe(2);
    });
  });

});
