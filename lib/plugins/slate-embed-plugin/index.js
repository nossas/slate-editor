'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedButton = exports.EmbedUtils = exports.EmbedKeyboardShortcut = exports.EmbedNode = exports.EmbedSchema = exports.EmbedPlugin = undefined;

var _EmbedSchema = require('./EmbedSchema');

var _EmbedSchema2 = _interopRequireDefault(_EmbedSchema);

var _EmbedNode = require('./EmbedNode');

var _EmbedNode2 = _interopRequireDefault(_EmbedNode);

var _EmbedKeyboardShortcut = require('./EmbedKeyboardShortcut');

var _EmbedKeyboardShortcut2 = _interopRequireDefault(_EmbedKeyboardShortcut);

var _EmbedUtils = require('./EmbedUtils');

var EmbedUtils = _interopRequireWildcard(_EmbedUtils);

var _EmbedButton = require('./EmbedButton');

var _EmbedButton2 = _interopRequireDefault(_EmbedButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
var EmbedPlugin = function EmbedPlugin(options) {
  return {
    schema: _EmbedSchema2.default,

    onKeyDown: function onKeyDown() {
      return _EmbedKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//
exports.EmbedPlugin = EmbedPlugin;
exports.EmbedSchema = _EmbedSchema2.default;
exports.EmbedNode = _EmbedNode2.default;
exports.EmbedKeyboardShortcut = _EmbedKeyboardShortcut2.default;
exports.EmbedUtils = EmbedUtils;
exports.EmbedButton = _EmbedButton2.default;