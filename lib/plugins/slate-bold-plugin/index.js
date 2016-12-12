'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoldKeyboardShortcut = exports.BoldButton = exports.BoldUtils = exports.BoldNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _BoldNode = require('./BoldNode');

var _BoldNode2 = _interopRequireDefault(_BoldNode);

var _BoldUtils = require('./BoldUtils');

var _BoldUtils2 = _interopRequireDefault(_BoldUtils);

var _BoldButton = require('./BoldButton');

var _BoldButton2 = _interopRequireDefault(_BoldButton);

var _BoldKeyboardShortcut = require('./BoldKeyboardShortcut');

var _BoldKeyboardShortcut2 = _interopRequireDefault(_BoldKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      marks: {
        bold: _BoldNode2.default
      }
    }
  }, _BoldKeyboardShortcut2.default);
};

exports.BoldNode = _BoldNode2.default;
exports.BoldUtils = _BoldUtils2.default;
exports.BoldButton = _BoldButton2.default;
exports.BoldKeyboardShortcut = _BoldKeyboardShortcut2.default;