'use strict';

angular.module('anotableApp')
.service('Dips', function Dips() {
  var _dips = [];

  this.get = function (id) {
    function coincideId (dip) {
      return dip.id === +id; //+ convierte a int
    }
    var resultado = _dips.filter(coincideId)[0];
    return resultado;
  };
  this.count = function () {
    return _dips.length;
  };
  this.add = function (dip) {
    _dips.push(dip);
  };
  this.all = function () {
    var resultado = _dips;
    return resultado;
  };
});
