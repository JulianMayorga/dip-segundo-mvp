'use strict';

describe('App', function() {
  beforeEach(function () {
    browser.get('/#/');
  });

  xit('deberia inicializar annotator', function() {
    //deberia tener la clase .annotator-wrapper en div #example
    var wrapper = element(by.css('.annotator-wrapper'));
    expect(wrapper.isPresent()).toBe(true);
  });

  it('deberia mostrar tres dips', function () {
    var dips = element.all(by.css('.dips li'));
    expect(dips.count()).toBe(3);
  });

  it('deberia cambiar la pagina al cliquear un dip', function () {
    var primerDip = element(by.repeater('dip in dips').row(0).column('{{dip.nombre}}'));
    primerDip.click();
    expect(browser.getCurrentUrl()).toContain('/dip/1');
  });
});
