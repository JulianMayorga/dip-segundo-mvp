'use strict';

describe('App', function() {
  it('deberia decir anotable', function() {
    browser.get('/#/');

    var h3 = element(by.css('.text-muted'));

    expect(h3.getText()).toEqual('anotable');
  });
});
