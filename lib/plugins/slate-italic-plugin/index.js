'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItalicKeyboardShortcut = exports.ItalicButton = exports.ItalicUtils = exports.ItalicNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ItalicNode = require('./ItalicNode');

var _ItalicNode2 = _interopRequireDefault(_ItalicNode);

var _ItalicUtils = require('./ItalicUtils');

var _ItalicUtils2 = _interopRequireDefault(_ItalicUtils);

var _ItalicButton = require('./ItalicButton');

var _ItalicButton2 = _interopRequireDefault(_ItalicButton);

var _ItalicKeyboardShortcut = require('./ItalicKeyboardShortcut');

var _ItalicKeyboardShortcut2 = _interopRequireDefault(_ItalicKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      marks: {
        italic: _ItalicNode2.default
      }
    }
  }, _ItalicKeyboardShortcut2.default);
};

exports.ItalicNode = _ItalicNode2.default;
exports.ItalicUtils = _ItalicUtils2.default;
exports.ItalicButton = _ItalicButton2.default;
exports.ItalicKeyboardShortcut = _ItalicKeyboardShortcut2.default;