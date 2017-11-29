'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StrikethroughUtils = require('./StrikethroughUtils');

var StrikethroughKeyboardShortcut = function StrikethroughKeyboardShortcut(event, change) {
  var key = event.key === 's';
  var mac = event.metaKey && event.ctrlKey && key;
  var win = event.ctrlKey && event.altKey && key;

  if (mac || win) return (0, _StrikethroughUtils.strikethroughMarkStrategy)(change);
  return;
};

exports.default = StrikethroughKeyboardShortcut;