'use strict';

describe('App', function() {
  beforeEach(function () {
    browser.get('/#/');
  });

  it('deberia inicializar annotator', function() {
    var primerDip = element(by.repeater('dip in dips').row(0).column('{{dip.nombre}}'));
    primerDip.click();
    //deberia tener la clase .annotator-wrapper en div #example
    var wrapper = element(by.css('.annotator-wrapper'));
    expect(wrapper.isPresent()).toBe(true);
  });

  it('deberia mostrar tres dips', function () {
    var dips = element.all(by.css('.dips a'));
    expect(dips.count()).toBe(3);
  });

  it('deberia cambiar la pagina al cliquear un dip', function () {
    var primerDip = element(by.repeater('dip in dips').row(0).column('{{dip.nombre}}'));
    primerDip.click();
    expect(browser.getCurrentUrl()).toContain('/dip/1');
  });

  it('deberia tener tabs', function () {
    var primerDip = element(by.repeater('dip in dips').row(0).column('{{dip.nombre}}'));
    primerDip.click();
    var dips = element(by.css('.nav-tabs'));
    expect(dips.isPresent()).toBe(true);
  });

  it('deberia tener contenido html', function () {
    var primerDip = element(by.repeater('dip in dips').row(0).column('{{dip.nombre}}'));
    primerDip.click();
    var html = element(by.css('.html .hljs'));
    expect(html.getText()).not.toBe('');
  });

});
