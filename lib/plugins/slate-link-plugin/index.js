'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkKeyboardShortcut = exports.LinkButton = exports.LinkUtils = exports.LinkNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _LinkNode = require('./LinkNode');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

var _LinkUtils = require('./LinkUtils');

var _LinkUtils2 = _interopRequireDefault(_LinkUtils);

var _LinkButton = require('./LinkButton');

var _LinkButton2 = _interopRequireDefault(_LinkButton);

var _LinkKeyboardShortcut = require('./LinkKeyboardShortcut');

var _LinkKeyboardShortcut2 = _interopRequireDefault(_LinkKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      nodes: {
        link: _LinkNode2.default
      }
    }
  }, _LinkKeyboardShortcut2.default);
};

exports.LinkNode = _LinkNode2.default;
exports.LinkUtils = _LinkUtils2.default;
exports.LinkButton = _LinkButton2.default;
exports.LinkKeyboardShortcut = _LinkKeyboardShortcut2.default;