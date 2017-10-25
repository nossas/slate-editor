'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BoldUtils = require('./BoldUtils');

var BoldKeyboardShortcut = function BoldKeyboardShortcut(event, data, change) {
  if (data.isMod && data.key === 'b') return (0, _BoldUtils.boldMarkStrategy)(change);
  return;
};

exports.default = BoldKeyboardShortcut;