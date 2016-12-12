'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoldButton = exports.BoldUtils = exports.BoldKeyboardShortcut = exports.BoldNode = exports.BoldSchema = undefined;

var _BoldSchema = require('./BoldSchema');

var _BoldSchema2 = _interopRequireDefault(_BoldSchema);

var _BoldNode = require('./BoldNode');

var _BoldNode2 = _interopRequireDefault(_BoldNode);

var _BoldKeyboardShortcut = require('./BoldKeyboardShortcut');

var _BoldKeyboardShortcut2 = _interopRequireDefault(_BoldKeyboardShortcut);

var _BoldUtils = require('./BoldUtils');

var _BoldUtils2 = _interopRequireDefault(_BoldUtils);

var _BoldButton = require('./BoldButton');

var _BoldButton2 = _interopRequireDefault(_BoldButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
exports.default = function (options) {
  return {
    schema: _BoldSchema2.default,

    onKeyDown: function onKeyDown() {
      return _BoldKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//


exports.BoldSchema = _BoldSchema2.default;
exports.BoldNode = _BoldNode2.default;
exports.BoldKeyboardShortcut = _BoldKeyboardShortcut2.default;
exports.BoldUtils = _BoldUtils2.default;
exports.BoldButton = _BoldButton2.default;