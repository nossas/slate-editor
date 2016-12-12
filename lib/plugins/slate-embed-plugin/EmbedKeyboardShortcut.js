'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmbedUtils = require('./EmbedUtils');

var EmbedKeyboardShortcut = function EmbedKeyboardShortcut(event, data, state, editor) {
  if (data.isMod && data.key === 'e') return (0, _EmbedUtils.appendEmbed)(state);
  return;
};

exports.default = EmbedKeyboardShortcut;