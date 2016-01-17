'use strict';

var pegjs = require('pegjs');
var rollupPluginutils = require('rollup-pluginutils');

var index = (function () {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return {
    transform: function transform(code, id) {
      var filter = rollupPluginutils.createFilter(options.include || "*.pegjs", options.exclude);
      return filter(id) ? { code: pegjs.buildParser(code, { output: "source" }), map: { mappings: "" } } : null;
    }
  };
})

module.exports = index;