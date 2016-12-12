'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedKeyboardShortcut = exports.EmbedButton = exports.EmbedUtils = exports.EmbedNode = undefined;

var _EmbedNode = require('./EmbedNode');

var _EmbedNode2 = _interopRequireDefault(_EmbedNode);

var _EmbedSchema = require('./EmbedSchema');

var _EmbedSchema2 = _interopRequireDefault(_EmbedSchema);

var _EmbedUtils = require('./EmbedUtils');

var _EmbedUtils2 = _interopRequireDefault(_EmbedUtils);

var _EmbedButton = require('./EmbedButton');

var _EmbedButton2 = _interopRequireDefault(_EmbedButton);

var _EmbedKeyboardShortcut = require('./EmbedKeyboardShortcut');

var _EmbedKeyboardShortcut2 = _interopRequireDefault(_EmbedKeyboardShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return {
    schema: _EmbedSchema2.default,

    onKeyDown: function onKeyDown() {
      return _EmbedKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

exports.EmbedNode = _EmbedNode2.default;
exports.EmbedUtils = _EmbedUtils2.default;
exports.EmbedButton = _EmbedButton2.default;
exports.EmbedKeyboardShortcut = _EmbedKeyboardShortcut2.default;