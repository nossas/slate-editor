'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _FontFamilyUtils = require('./FontFamilyUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontFamilyKeyboardShortcut = function FontFamilyKeyboardShortcut(event, data, change) {
  if (!data.isMod || (0, _keycode2.default)(data.code) !== 'b') return;
  return (0, _FontFamilyUtils.fontFamilyMarkStrategy)(change);
};

exports.default = FontFamilyKeyboardShortcut;