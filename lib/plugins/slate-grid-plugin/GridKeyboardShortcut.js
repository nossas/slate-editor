'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GridUtils = require('./GridUtils');

var GridKeyboardShortcut = function GridKeyboardShortcut(event, change) {
  var gridKey = event.key === 'g';
  var macGrid = event.ctrlKey && event.metaKey && gridKey;
  var winGrid = event.ctrlKey && event.altKey && gridKey;
  var isGrid = macGrid || winGrid;
  if (isGrid) return (0, _GridUtils.appendGrid)(change);

  var keyRow = event.key === 'r';
  var macRow = event.ctrlKey && event.metaKey && keyRow;
  var winRow = event.ctrlKey && event.altKey && keyRow;
  var isRow = macRow || winRow;
  if (isRow) return (0, _GridUtils.splitRow)(change);

  return;
};

exports.default = GridKeyboardShortcut;