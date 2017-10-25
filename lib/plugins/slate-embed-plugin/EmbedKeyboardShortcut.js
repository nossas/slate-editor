'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmbedUtils = require('./EmbedUtils');

var EmbedKeyboardShortcut = function EmbedKeyboardShortcut(event, data, change) {
  if (data.isMod && data.key === 'e') return (0, _EmbedUtils.appendEmbed)(change);
  return;
};

exports.default = EmbedKeyboardShortcut;