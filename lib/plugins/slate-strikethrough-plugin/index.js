'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrikethroughKeyboardShortcut = exports.StrikethroughButton = exports.StrikethroughUtils = exports.StrikethroughMark = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _StrikethroughMark = require('./StrikethroughMark');

var _StrikethroughMark2 = _interopRequireDefault(_StrikethroughMark);

var _StrikethroughUtils = require('./StrikethroughUtils');

var _StrikethroughUtils2 = _interopRequireDefault(_StrikethroughUtils);

var _StrikethroughButton = require('./StrikethroughButton');

var _StrikethroughButton2 = _interopRequireDefault(_StrikethroughButton);

var _StrikethroughKeyboardShortcut = require('./StrikethroughKeyboardShortcut');

var _StrikethroughKeyboardShortcut2 = _interopRequireDefault(_StrikethroughKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      marks: {
        strikethrough: _StrikethroughMark2.default
      }
    }
  }, _StrikethroughKeyboardShortcut2.default);
};

exports.StrikethroughMark = _StrikethroughMark2.default;
exports.StrikethroughUtils = _StrikethroughUtils2.default;
exports.StrikethroughButton = _StrikethroughButton2.default;
exports.StrikethroughKeyboardShortcut = _StrikethroughKeyboardShortcut2.default;