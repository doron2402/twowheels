define(function(require, exports, module) {
  "use strict";

  var app = require("app");

  var Model = Backbone.Model.extend({

    defaults: {
      id: null
    }
  });

  module.exports = Model;
});
