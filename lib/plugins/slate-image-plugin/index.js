'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageButton = exports.ImageUtils = exports.ImageKeyboardShortcut = exports.ImageNode = exports.ImageSchema = undefined;

var _ImageSchema = require('./ImageSchema');

var _ImageSchema2 = _interopRequireDefault(_ImageSchema);

var _ImageNode = require('./ImageNode');

var _ImageNode2 = _interopRequireDefault(_ImageNode);

var _ImageKeyboardShortcut = require('./ImageKeyboardShortcut');

var _ImageKeyboardShortcut2 = _interopRequireDefault(_ImageKeyboardShortcut);

var _ImageUtils = require('./ImageUtils');

var _ImageUtils2 = _interopRequireDefault(_ImageUtils);

var _ImageButton = require('./ImageButton');

var _ImageButton2 = _interopRequireDefault(_ImageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
exports.default = function (options) {
  return {
    schema: _ImageSchema2.default,

    onKeyDown: function onKeyDown() {
      return _ImageKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//


exports.ImageSchema = _ImageSchema2.default;
exports.ImageNode = _ImageNode2.default;
exports.ImageKeyboardShortcut = _ImageKeyboardShortcut2.default;
exports.ImageUtils = _ImageUtils2.default;
exports.ImageButton = _ImageButton2.default;