'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoldButton = exports.BoldUtils = exports.BoldKeyboardShortcut = exports.BoldMark = exports.BoldPlugin = undefined;

var _BoldMark = require('./BoldMark');

var _BoldMark2 = _interopRequireDefault(_BoldMark);

var _BoldKeyboardShortcut = require('./BoldKeyboardShortcut');

var _BoldKeyboardShortcut2 = _interopRequireDefault(_BoldKeyboardShortcut);

var _BoldUtils = require('./BoldUtils');

var BoldUtils = _interopRequireWildcard(_BoldUtils);

var _BoldButton = require('./BoldButton');

var _BoldButton2 = _interopRequireDefault(_BoldButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
//
// Rendering
//
var BoldPlugin = function BoldPlugin(options) {
  return {
    onKeyDown: function onKeyDown() {
      return _BoldKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
exports.BoldPlugin = BoldPlugin;
exports.BoldMark = _BoldMark2.default;
exports.BoldKeyboardShortcut = _BoldKeyboardShortcut2.default;
exports.BoldUtils = BoldUtils;
exports.BoldButton = _BoldButton2.default;