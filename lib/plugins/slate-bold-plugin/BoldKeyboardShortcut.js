'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BoldUtils = require('./BoldUtils');

var BoldKeyboardShortcut = function BoldKeyboardShortcut(event, data, state) {
  if (data.isMod && data.key === 'b') return (0, _BoldUtils.boldMarkStrategy)(state);
  return;
};

exports.default = BoldKeyboardShortcut;