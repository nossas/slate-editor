'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _FontFamilyUtils = require('./FontFamilyUtils');

var FontFamilyKeyboardShortcut = function FontFamilyKeyboardShortcut(event, change, editor) {
  if (!(0, _keyboardEvent.isMod)(event) || event.key !== 'b') return;
  return (0, _FontFamilyUtils.fontFamilyMarkStrategy)(change);
};

exports.default = FontFamilyKeyboardShortcut;