'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(value) {
  return value.marks.some(function (mark) {
    return mark.type === 'underline';
  });
};

var underlineMarkStrategy = exports.underlineMarkStrategy = function underlineMarkStrategy(change) {
  return change.toggleMark('underline').focus();
};