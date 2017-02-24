'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageUtils = require('./ImageUtils');

var ImageKeyboardShortcut = function ImageKeyboardShortcut(event, data, state) {
  if (data.isMod && event.shiftKey && data.key === 'i') return (0, _ImageUtils.forceClickUploadButton)(state);
  return;
};

exports.default = ImageKeyboardShortcut;