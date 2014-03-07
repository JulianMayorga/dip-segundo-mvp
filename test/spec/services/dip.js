'use strict';

describe('Service: Dip', function () {

  // load the service's module
  beforeEach(module('anotableApp'));

  // instantiate service
  var Dip;

  beforeEach(inject(function (_Dip_) {
    Dip = _Dip_;
  }));

  it('deberia agregar nombre y codigo', function () {
    var nombre = 'Hola mundo';
    var html = '<div>Hola mundo</div>';
    var css = '.class{}';
    var js = 'console.log()';
    var dip = new Dip(nombre, {html: html, css: css, js: js});
    expect(dip.nombre).toBe(nombre);
    expect(dip.html).toBe(html);
    expect(dip.css).toBe(css);
    expect(dip.js).toBe(js);
  });

  it('deberia generar ids autoincrementales', function () {
    var nombre = 'Hola mundo';
    var codigo = '<div>Hola mundo</div>';
    var dip = new Dip(nombre, codigo);
    var otroDip = new Dip(nombre, codigo);
    expect(dip.id).toBe(4);
    expect(otroDip.id).toBe(5);
  });

});
