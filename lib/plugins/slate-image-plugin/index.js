'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageButton = exports.ImageUtils = exports.ImageKeyboardShortcut = exports.ImageLinkNode = exports.ImageNode = exports.ImagePlugin = undefined;

var _ImageNode = require('./ImageNode');

var _ImageNode2 = _interopRequireDefault(_ImageNode);

var _ImageLinkNode = require('./ImageLinkNode');

var _ImageLinkNode2 = _interopRequireDefault(_ImageLinkNode);

var _ImageKeyboardShortcut = require('./ImageKeyboardShortcut');

var _ImageKeyboardShortcut2 = _interopRequireDefault(_ImageKeyboardShortcut);

var _ImageUtils = require('./ImageUtils');

var ImageUtils = _interopRequireWildcard(_ImageUtils);

var _ImageButton = require('./ImageButton');

var _ImageButton2 = _interopRequireDefault(_ImageButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
var ImagePlugin = function ImagePlugin(options) {
  return {
    onKeyDown: function onKeyDown() {
      return _ImageKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Rendering
//
exports.ImagePlugin = ImagePlugin;
exports.ImageNode = _ImageNode2.default;
exports.ImageLinkNode = _ImageLinkNode2.default;
exports.ImageKeyboardShortcut = _ImageKeyboardShortcut2.default;
exports.ImageUtils = ImageUtils;
exports.ImageButton = _ImageButton2.default;