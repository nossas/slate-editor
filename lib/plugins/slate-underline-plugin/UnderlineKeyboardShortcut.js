'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UnderlineUtils = require('./UnderlineUtils');

var UnderlineKeyboardShortcut = function UnderlineKeyboardShortcut(event, data, state) {
  if (data.isMod && data.key === 'u') return (0, _UnderlineUtils.underlineMarkStrategy)(state);
  return;
};

exports.default = UnderlineKeyboardShortcut;