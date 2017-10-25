'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(function (mark) {
    return mark.type === 'italic';
  });
};

var italicMarkStrategy = exports.italicMarkStrategy = function italicMarkStrategy(change) {
  return change.toggleMark('italic').focus();
};