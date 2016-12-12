'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageKeyboardShortcut = exports.ImageButton = exports.ImageUtils = exports.ImageNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ImageNode = require('./ImageNode');

var _ImageNode2 = _interopRequireDefault(_ImageNode);

var _ImageUtils = require('./ImageUtils');

var _ImageUtils2 = _interopRequireDefault(_ImageUtils);

var _ImageButton = require('./ImageButton');

var _ImageButton2 = _interopRequireDefault(_ImageButton);

var _ImageKeyboardShortcut = require('./ImageKeyboardShortcut');

var _ImageKeyboardShortcut2 = _interopRequireDefault(_ImageKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      nodes: {
        image: _ImageNode2.default
      }
    }
  }, _ImageKeyboardShortcut2.default);
};

exports.ImageNode = _ImageNode2.default;
exports.ImageUtils = _ImageUtils2.default;
exports.ImageButton = _ImageButton2.default;
exports.ImageKeyboardShortcut = _ImageKeyboardShortcut2.default;