'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _EmbedUtils = require('./EmbedUtils');

var EmbedKeyboardShortcut = function EmbedKeyboardShortcut(event, change) {
  if ((0, _keyboardEvent.isMod)(event) && event.key === 'e') return (0, _EmbedUtils.appendEmbed)(change);
  return;
};

exports.default = EmbedKeyboardShortcut;