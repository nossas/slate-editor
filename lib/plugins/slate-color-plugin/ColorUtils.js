'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeFilter = exports.typeFilter = function typeFilter(mark) {
  return mark.type === 'color';
};
var hasMark = exports.hasMark = function hasMark(value) {
  return value.marks.some(typeFilter);
};
var getMarks = exports.getMarks = function getMarks(value) {
  return value.marks.filter(typeFilter);
};
var getMark = exports.getMark = function getMark(value) {
  return value.marks.filter(typeFilter).first();
};

var createMark = exports.createMark = function createMark(rgba) {
  return {
    type: 'color',
    data: { rgba: rgba }
  };
};

var reapplyMark = exports.reapplyMark = function reapplyMark(_ref) {
  var change = _ref.change,
      rgba = _ref.rgba;

  // remove all nested color marks
  getMarks(change.value).map(function (mark) {
    return change.removeMark(mark);
  });

  return change.addMark(createMark(rgba));
};

var applyMark = exports.applyMark = function applyMark(_ref2) {
  var change = _ref2.change,
      rgba = _ref2.rgba;
  return change.addMark(createMark(rgba));
};

/**
 * Strategy that decides how color mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {Value} value
 *    @property {Object} rgba
 *        @property {int} r
 *        @property {int} g
 *        @property {int} b
 *        @property {int} a
 */
var colorMarkStrategy = exports.colorMarkStrategy = function colorMarkStrategy(attributes) {
  var value = attributes.value,
      rgba = attributes.rgba;


  if (hasMark(value)) {
    if (value.isExpanded) {
      return reapplyMark({ change: value.change(), rgba: rgba });
    } else console.info('[SlateJS][ColorPlugin] selection collapsed, w/ mark exists');
  } else {
    if (value.isExpanded) {
      return applyMark({ change: value.change(), rgba: rgba });
    } else console.info('[SlateJS][ColorPlugin] selection collapsed, w/o mark');
  }

  return value.change();
};