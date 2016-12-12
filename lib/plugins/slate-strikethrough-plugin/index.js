'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrikethroughButton = exports.StrikethroughUtils = exports.StrikethroughKeyboardShortcut = exports.StrikethroughMark = exports.StrikethroughSchema = undefined;

var _StrikethroughSchema = require('./StrikethroughSchema');

var _StrikethroughSchema2 = _interopRequireDefault(_StrikethroughSchema);

var _StrikethroughMark = require('./StrikethroughMark');

var _StrikethroughMark2 = _interopRequireDefault(_StrikethroughMark);

var _StrikethroughKeyboardShortcut = require('./StrikethroughKeyboardShortcut');

var _StrikethroughKeyboardShortcut2 = _interopRequireDefault(_StrikethroughKeyboardShortcut);

var _StrikethroughUtils = require('./StrikethroughUtils');

var _StrikethroughUtils2 = _interopRequireDefault(_StrikethroughUtils);

var _StrikethroughButton = require('./StrikethroughButton');

var _StrikethroughButton2 = _interopRequireDefault(_StrikethroughButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
exports.default = function (options) {
  return {
    schema: _StrikethroughSchema2.default,

    onKeyDown: function onKeyDown() {
      return _StrikethroughKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schame
//


exports.StrikethroughSchema = _StrikethroughSchema2.default;
exports.StrikethroughMark = _StrikethroughMark2.default;
exports.StrikethroughKeyboardShortcut = _StrikethroughKeyboardShortcut2.default;
exports.StrikethroughUtils = _StrikethroughUtils2.default;
exports.StrikethroughButton = _StrikethroughButton2.default;