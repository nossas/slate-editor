'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ItalicUtils = require('./ItalicUtils');

var ItalicKeyboardShortcut = function ItalicKeyboardShortcut(event, data, change) {
  if (data.isMod && !event.shiftKey && data.key === 'i') return (0, _ItalicUtils.italicMarkStrategy)(change);
  return;
};

exports.default = ItalicKeyboardShortcut;