'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(function (mark) {
    return mark.type === 'strikethrough';
  });
};

var strikethroughMarkStrategy = exports.strikethroughMarkStrategy = function strikethroughMarkStrategy(state) {
  return state.transform().toggleMark('strikethrough').focus().apply();
};