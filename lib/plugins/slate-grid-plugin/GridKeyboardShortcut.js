'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GridUtils = require('./GridUtils');

var GridKeyboardShortcut = function GridKeyboardShortcut(event, data, change) {
  var gridKey = data.key === 'g';
  var macGrid = data.isCtrl && data.isCmd && gridKey;
  var winGrid = data.isCtrl && data.isAlt && gridKey;
  var isGrid = macGrid || winGrid;
  if (isGrid) return (0, _GridUtils.appendGrid)(change);

  var keyRow = data.key === 'r';
  var macRow = data.isCtrl && data.isCmd && keyRow;
  var winRow = data.isCtrl && data.isAlt && keyRow;
  var isRow = macRow || winRow;
  if (isRow) return (0, _GridUtils.splitRow)(change);

  return;
};

exports.default = GridKeyboardShortcut;