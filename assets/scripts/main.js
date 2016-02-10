
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.caddy = factory(root);
  }
})(this, function (root) {

  'use strict';

  var caddy = {

    'init' : function () {
      console.log('hi dude');
    }

  };

  return caddy;

});
