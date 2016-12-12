'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasGrid = exports.hasGrid = function hasGrid(state) {
  return state.blocks.some(function (block) {
    return !!state.document.getClosest(block.key, function (parent) {
      return parent.type === 'grid';
    });
  });
};

var appendGrid = exports.appendGrid = function appendGrid(state) {
  return state.transform().setBlock('grid-cell').wrapBlock('grid').wrapBlock('grid-row').focus().apply();
};

var splitRow = exports.splitRow = function splitRow(state) {
  return state.transform().splitBlock(2).focus().apply();
};