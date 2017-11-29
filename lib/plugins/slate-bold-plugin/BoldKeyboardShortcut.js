'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _BoldUtils = require('./BoldUtils');

var BoldKeyboardShortcut = function BoldKeyboardShortcut(event, change) {
  if ((0, _keyboardEvent.isMod)(event) && event.key === 'b') return (0, _BoldUtils.boldMarkStrategy)(change);
  return;
};

exports.default = BoldKeyboardShortcut;