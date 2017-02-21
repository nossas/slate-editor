'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoldButton = exports.BoldUtils = exports.BoldKeyboardShortcut = exports.BoldNode = exports.BoldSchema = exports.BoldPlugin = undefined;

var _BoldSchema = require('./BoldSchema');

var _BoldSchema2 = _interopRequireDefault(_BoldSchema);

var _BoldNode = require('./BoldNode');

var _BoldNode2 = _interopRequireDefault(_BoldNode);

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
var BoldPlugin = function BoldPlugin(options) {
  return {
    schema: _BoldSchema2.default,

    onKeyDown: function onKeyDown() {
      return _BoldKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//
exports.BoldPlugin = BoldPlugin;
exports.BoldSchema = _BoldSchema2.default;
exports.BoldNode = _BoldNode2.default;
exports.BoldKeyboardShortcut = _BoldKeyboardShortcut2.default;
exports.BoldUtils = BoldUtils;
exports.BoldButton = _BoldButton2.default;