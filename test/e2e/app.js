'use strict';

describe('App', function() {
  it('deberia inicializar annotator', function() {
    browser.get('/#/');
    //deberia tener la clase .annotator-wrapper en div #example
    var wrapper = element(by.css('.annotator-wrapper'));
    expect(wrapper.isPresent()).toBe(true);
  });
});
