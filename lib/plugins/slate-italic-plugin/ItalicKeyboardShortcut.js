'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _ItalicUtils = require('./ItalicUtils');

var ItalicKeyboardShortcut = function ItalicKeyboardShortcut(event, change) {
  if ((0, _keyboardEvent.isMod)(event) && !event.shiftKey && event.key === 'i') return (0, _ItalicUtils.italicMarkStrategy)(change);
  return;
};

exports.default = ItalicKeyboardShortcut;