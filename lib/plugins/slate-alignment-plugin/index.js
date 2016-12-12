'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignmentKeyboardShortcut = exports.AlignmentButton = exports.AlignmentUtils = exports.AlignmentNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AlignmentNode = require('./AlignmentNode');

var _AlignmentNode2 = _interopRequireDefault(_AlignmentNode);

var _AlignmentUtils = require('./AlignmentUtils');

var _AlignmentUtils2 = _interopRequireDefault(_AlignmentUtils);

var _AlignmentButton = require('./AlignmentButton');

var _AlignmentButton2 = _interopRequireDefault(_AlignmentButton);

var _AlignmentKeyboardShortcut = require('./AlignmentKeyboardShortcut');

var _AlignmentKeyboardShortcut2 = _interopRequireDefault(_AlignmentKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      nodes: {
        alignment: _AlignmentNode2.default
      }
    }
  }, _AlignmentKeyboardShortcut2.default);
};

exports.AlignmentNode = _AlignmentNode2.default;
exports.AlignmentUtils = _AlignmentUtils2.default;
exports.AlignmentButton = _AlignmentButton2.default;
exports.AlignmentKeyboardShortcut = _AlignmentKeyboardShortcut2.default;