'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(function (mark) {
    return mark.type === 'underline';
  });
};

var underlineMarkStrategy = exports.underlineMarkStrategy = function underlineMarkStrategy(change) {
  return change.toggleMark('underline').focus();
};