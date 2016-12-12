'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnderlineKeyboardShortcut = exports.UnderlineButton = exports.UnderlineUtils = exports.UnderlineMark = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _UnderlineMark = require('./UnderlineMark');

var _UnderlineMark2 = _interopRequireDefault(_UnderlineMark);

var _UnderlineUtils = require('./UnderlineUtils');

var _UnderlineUtils2 = _interopRequireDefault(_UnderlineUtils);

var _UnderlineButton = require('./UnderlineButton');

var _UnderlineButton2 = _interopRequireDefault(_UnderlineButton);

var _UnderlineKeyboardShortcut = require('./UnderlineKeyboardShortcut');

var _UnderlineKeyboardShortcut2 = _interopRequireDefault(_UnderlineKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      marks: {
        underline: _UnderlineMark2.default
      }
    }
  }, _UnderlineKeyboardShortcut2.default);
};

exports.UnderlineMark = _UnderlineMark2.default;
exports.UnderlineUtils = _UnderlineUtils2.default;
exports.UnderlineButton = _UnderlineButton2.default;
exports.UnderlineKeyboardShortcut = _UnderlineKeyboardShortcut2.default;