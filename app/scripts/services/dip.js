'use strict';

angular.module('anotableApp')
  .factory('Dip', function () {
    var Dip = function (nombre, codigo) {
      this.nombre = nombre;
      this.codigo = codigo;
    };

    return Dip;
  });
