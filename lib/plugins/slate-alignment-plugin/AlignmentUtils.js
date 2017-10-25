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
var getType = exports.getType = function getType(state) {
  return state.blocks.first().type;
};

var alignmentMarkStrategy = exports.alignmentMarkStrategy = function alignmentMarkStrategy(change, align) {
  return change.setBlock({
    type: 'alignment',
    data: { align: align, currentBlockType: getType(change.state) }
  }).focus();
};

var alignLeft = exports.alignLeft = function alignLeft(change) {
  return alignmentMarkStrategy(change, 'left');
};
var alignCenter = exports.alignCenter = function alignCenter(change) {
  return alignmentMarkStrategy(change, 'center');
};
var alignRight = exports.alignRight = function alignRight(change) {
  return alignmentMarkStrategy(change, 'right');
};