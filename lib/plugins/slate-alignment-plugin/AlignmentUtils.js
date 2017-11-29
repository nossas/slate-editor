'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(value) {
  return value.blocks.some(function (node) {
    return node.type === 'alignment';
  });
};
var getMark = exports.getMark = function getMark(value) {
  return value.blocks.filter(function (node) {
    return node.type === 'alignment';
  }).first();
};
var getType = exports.getType = function getType(value) {
  return value.blocks.first().type;
};

var alignmentMarkStrategy = exports.alignmentMarkStrategy = function alignmentMarkStrategy(change, align) {
  return change.setBlock({
    type: 'alignment',
    data: { align: align, currentBlockType: getType(change.value) }
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