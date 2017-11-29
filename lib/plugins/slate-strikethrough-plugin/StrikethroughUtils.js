'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(value) {
  return value.marks.some(function (mark) {
    return mark.type === 'strikethrough';
  });
};

var strikethroughMarkStrategy = exports.strikethroughMarkStrategy = function strikethroughMarkStrategy(change) {
  return change.toggleMark('strikethrough').focus();
};