'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = exports.LinkUtils = exports.LinkKeyboardShortcut = exports.LinkNode = exports.LinkSchema = undefined;

var _LinkSchema = require('./LinkSchema');

var _LinkSchema2 = _interopRequireDefault(_LinkSchema);

var _LinkNode = require('./LinkNode');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

var _LinkKeyboardShortcut = require('./LinkKeyboardShortcut');

var _LinkKeyboardShortcut2 = _interopRequireDefault(_LinkKeyboardShortcut);

var _LinkUtils = require('./LinkUtils');

var _LinkUtils2 = _interopRequireDefault(_LinkUtils);

var _LinkButton = require('./LinkButton');

var _LinkButton2 = _interopRequireDefault(_LinkButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
exports.default = function (options) {
  return {
    schema: _LinkSchema2.default,

    onKeyDown: function onKeyDown() {
      return _LinkKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//


exports.LinkSchema = _LinkSchema2.default;
exports.LinkNode = _LinkNode2.default;
exports.LinkKeyboardShortcut = _LinkKeyboardShortcut2.default;
exports.LinkUtils = _LinkUtils2.default;
exports.LinkButton = _LinkButton2.default;