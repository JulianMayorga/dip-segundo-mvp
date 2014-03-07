'use strict';

angular.module('anotableApp')
  .factory('Dip', function () {
    var _ids = 0;

    var Dip = function (nombre, codigo) {
      this.nombre = nombre;
      this.html = codigo.html;
      this.css = codigo.css;
      this.js = codigo.js;
      this.id = ++_ids;
    };

    return Dip;
  });
