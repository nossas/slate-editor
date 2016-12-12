'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListKeyboardShortcut = exports.ListButton = exports.ListUtils = exports.ListSchema = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ListSchema = require('./ListSchema');

var _ListSchema2 = _interopRequireDefault(_ListSchema);

var _ListUtils = require('./ListUtils');

var _ListUtils2 = _interopRequireDefault(_ListUtils);

var _ListButton = require('./ListButton');

var _ListButton2 = _interopRequireDefault(_ListButton);

var _ListKeyboardShortcut = require('./ListKeyboardShortcut');

var _ListKeyboardShortcut2 = _interopRequireDefault(_ListKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: _ListSchema2.default

  }, _ListKeyboardShortcut2.default);
};

exports.ListSchema = _ListSchema2.default;
exports.ListUtils = _ListUtils2.default;
exports.ListButton = _ListButton2.default;
exports.ListKeyboardShortcut = _ListKeyboardShortcut2.default;