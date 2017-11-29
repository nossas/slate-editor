'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _UnderlineUtils = require('./UnderlineUtils');

var UnderlineKeyboardShortcut = function UnderlineKeyboardShortcut(event, change) {
  if ((0, _keyboardEvent.isMod)(event) && event.key === 'u') return (0, _UnderlineUtils.underlineMarkStrategy)(change);
  return;
};

exports.default = UnderlineKeyboardShortcut;