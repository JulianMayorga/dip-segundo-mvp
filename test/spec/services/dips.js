'use strict';

describe('Service: Dips', function () {

  // load the service's module
  beforeEach(module('anotableApp'));

  // instantiate service
  var Dips;
  beforeEach(inject(function (_Dips_) {
    Dips = _Dips_;
  }));

  it('should do something', function () {
    expect(!!Dips).toBe(true);
  });

});
