'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LinkUtils = require('./LinkUtils');

var LinkKeyboardShortcut = function LinkKeyboardShortcut(event, data, state) {
  if (data.isMod && data.key === 'k') return (0, _LinkUtils.insertLinkStrategy)(state);
  return;
};

exports.default = LinkKeyboardShortcut;