'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ValidatePluginOptions = function ValidatePluginOptions(options) {
  var sign = '[SlateJS][FontSizePlugin]';

  if (!options) {
    throw new Error(sign + ' You must supply the options to configure the plugin.');
  }

  if (!options.initialFontSize) {
    throw new Error(sign + ' You must supply the `initialFontSize`.');
  }
};

exports.default = ValidatePluginOptions;