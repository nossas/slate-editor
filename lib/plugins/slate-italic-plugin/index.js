'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItalicButton = exports.ItalicUtils = exports.ItalicKeyboardShortcut = exports.ItalicMark = exports.ItalicSchema = exports.ItalicPlugin = undefined;

var _ItalicSchema = require('./ItalicSchema');

var _ItalicSchema2 = _interopRequireDefault(_ItalicSchema);

var _ItalicMark = require('./ItalicMark');

var _ItalicMark2 = _interopRequireDefault(_ItalicMark);

var _ItalicKeyboardShortcut = require('./ItalicKeyboardShortcut');

var _ItalicKeyboardShortcut2 = _interopRequireDefault(_ItalicKeyboardShortcut);

var _ItalicUtils = require('./ItalicUtils');

var ItalicUtils = _interopRequireWildcard(_ItalicUtils);

var _ItalicButton = require('./ItalicButton');

var _ItalicButton2 = _interopRequireDefault(_ItalicButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
var ItalicPlugin = function ItalicPlugin(options) {
  return {
    schema: _ItalicSchema2.default,

    onKeyDown: function onKeyDown() {
      return _ItalicKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//
exports.ItalicPlugin = ItalicPlugin;
exports.ItalicSchema = _ItalicSchema2.default;
exports.ItalicMark = _ItalicMark2.default;
exports.ItalicKeyboardShortcut = _ItalicKeyboardShortcut2.default;
exports.ItalicUtils = ItalicUtils;
exports.ItalicButton = _ItalicButton2.default;