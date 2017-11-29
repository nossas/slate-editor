'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _LinkUtils = require('./LinkUtils');

var LinkKeyboardShortcut = function LinkKeyboardShortcut(event, change) {
  if ((0, _keyboardEvent.isMod)(event) && event.key === 'k') return (0, _LinkUtils.insertLinkStrategy)(change);
  return;
};

exports.default = LinkKeyboardShortcut;