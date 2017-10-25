'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StrikethroughUtils = require('./StrikethroughUtils');

var StrikethroughKeyboardShortcut = function StrikethroughKeyboardShortcut(event, data, change) {
  var key = data.key === 's';
  var mac = data.isCmd && data.isCtrl && key;
  var win = data.isCtrl && data.isAlt && key;

  if (mac || win) return (0, _StrikethroughUtils.strikethroughMarkStrategy)(change);
  return;
};

exports.default = StrikethroughKeyboardShortcut;