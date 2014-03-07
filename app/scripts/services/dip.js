'use strict';

angular.module('anotableApp')
  .factory('Dip', function () {
    var _ids = 0;

    var Dip = function (nombre, codigo) {
      this.nombre = nombre;
      this.codigo = codigo;
      this.id = ++_ids;
    };

    return Dip;
  });
