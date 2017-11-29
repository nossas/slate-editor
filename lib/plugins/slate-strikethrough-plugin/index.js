'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrikethroughButton = exports.StrikethroughUtils = exports.StrikethroughKeyboardShortcut = exports.StrikethroughMark = exports.StrikethroughPlugin = undefined;

var _StrikethroughMark = require('./StrikethroughMark');

var _StrikethroughMark2 = _interopRequireDefault(_StrikethroughMark);

var _StrikethroughKeyboardShortcut = require('./StrikethroughKeyboardShortcut');

var _StrikethroughKeyboardShortcut2 = _interopRequireDefault(_StrikethroughKeyboardShortcut);

var _StrikethroughUtils = require('./StrikethroughUtils');

var StrikethroughUtils = _interopRequireWildcard(_StrikethroughUtils);

var _StrikethroughButton = require('./StrikethroughButton');

var _StrikethroughButton2 = _interopRequireDefault(_StrikethroughButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
//
// Rendering
//
var StrikethroughPlugin = function StrikethroughPlugin(options) {
  return {
    onKeyDown: function onKeyDown() {
      return _StrikethroughKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
exports.StrikethroughPlugin = StrikethroughPlugin;
exports.StrikethroughMark = _StrikethroughMark2.default;
exports.StrikethroughKeyboardShortcut = _StrikethroughKeyboardShortcut2.default;
exports.StrikethroughUtils = StrikethroughUtils;
exports.StrikethroughButton = _StrikethroughButton2.default;