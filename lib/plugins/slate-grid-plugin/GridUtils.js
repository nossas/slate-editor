'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasGrid = exports.hasGrid = function hasGrid(value) {
  return value.blocks.some(function (block) {
    return !!value.document.getClosest(block.key, function (parent) {
      return parent.type === 'grid';
    });
  });
};

var appendGrid = exports.appendGrid = function appendGrid(change) {
  return change.setBlock('grid-cell').wrapBlock('grid').wrapBlock('grid-row').focus();
};

var splitRow = exports.splitRow = function splitRow(change) {
  return change.splitBlock(2).focus();
};