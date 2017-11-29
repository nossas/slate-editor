'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _ImageUtils = require('./ImageUtils');

var ImageKeyboardShortcut = function ImageKeyboardShortcut(event, change, editor) {
  if ((0, _keyboardEvent.isMod)(event) && event.shiftKey && event.key === 'i') return (0, _ImageUtils.forceClickUploadButton)(editor);
  return;
};

exports.default = ImageKeyboardShortcut;