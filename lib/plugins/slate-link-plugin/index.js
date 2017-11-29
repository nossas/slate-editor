'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = exports.LinkUtils = exports.LinkKeyboardShortcut = exports.LinkNode = exports.LinkPlugin = undefined;

var _LinkNode = require('./LinkNode');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

var _LinkKeyboardShortcut = require('./LinkKeyboardShortcut');

var _LinkKeyboardShortcut2 = _interopRequireDefault(_LinkKeyboardShortcut);

var _LinkUtils = require('./LinkUtils');

var LinkUtils = _interopRequireWildcard(_LinkUtils);

var _LinkButton = require('./LinkButton');

var _LinkButton2 = _interopRequireDefault(_LinkButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
//
// Rendering
//
var LinkPlugin = function LinkPlugin(options) {
  return {
    onKeyDown: function onKeyDown() {
      return _LinkKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
exports.LinkPlugin = LinkPlugin;
exports.LinkNode = _LinkNode2.default;
exports.LinkKeyboardShortcut = _LinkKeyboardShortcut2.default;
exports.LinkUtils = LinkUtils;
exports.LinkButton = _LinkButton2.default;