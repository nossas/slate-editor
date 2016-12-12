'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.blocks.some(function (node) {
    return node.type === 'alignment';
  });
};
var getMark = exports.getMark = function getMark(state) {
  return state.blocks.filter(function (node) {
    return node.type === 'alignment';
  }).first();
};

var alignmentMarkStrategy = exports.alignmentMarkStrategy = function alignmentMarkStrategy(state, align) {
  return state.transform().setBlock({
    type: 'alignment',
    data: { align: align }
  }).focus().apply();
};

var alignLeft = exports.alignLeft = function alignLeft(state) {
  return alignmentMarkStrategy(state, 'left');
};
var alignCenter = exports.alignCenter = function alignCenter(state) {
  return alignmentMarkStrategy(state, 'center');
};
var alignRight = exports.alignRight = function alignRight(state) {
  return alignmentMarkStrategy(state, 'right');
};