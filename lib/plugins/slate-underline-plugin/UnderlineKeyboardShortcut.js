'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UnderlineUtils = require('./UnderlineUtils');

var UnderlineKeyboardShortcut = function UnderlineKeyboardShortcut(event, data, change) {
  if (data.isMod && data.key === 'u') return (0, _UnderlineUtils.underlineMarkStrategy)(change);
  return;
};

exports.default = UnderlineKeyboardShortcut;