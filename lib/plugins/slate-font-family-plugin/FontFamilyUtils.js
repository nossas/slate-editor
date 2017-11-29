'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(value) {
  return value.marks.some(function (mark) {
    return mark.type === 'font-family';
  });
};
var getMark = exports.getMark = function getMark(value) {
  return value.marks.filter(function (mark) {
    return mark.type === 'font-family';
  }).first();
};

var createMark = exports.createMark = function createMark(fontFamilyIndex) {
  return {
    type: 'font-family',
    data: { fontFamilyIndex: fontFamilyIndex }
  };
};

var reapplyMark = exports.reapplyMark = function reapplyMark(_ref) {
  var change = _ref.change,
      fontFamilyIndex = _ref.fontFamilyIndex;
  return change.removeMark(getMark(change.value)).addMark(createMark(fontFamilyIndex));
};

var applyMark = exports.applyMark = function applyMark(_ref2) {
  var change = _ref2.change,
      fontFamilyIndex = _ref2.fontFamilyIndex;
  return change.addMark(createMark(fontFamilyIndex));
};

/**
 * Strategy that decides how font family mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {Value} value
 *    @property {int} fontFamilyIndex
 */
var fontFamilyMarkStrategy = exports.fontFamilyMarkStrategy = function fontFamilyMarkStrategy(attributes) {
  var value = attributes.value,
      fontFamilyIndex = attributes.fontFamilyIndex;


  if (hasMark(value)) {
    if (value.isExpanded) {
      return reapplyMark({ change: value.change(), fontFamilyIndex: fontFamilyIndex });
    } else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists');
  } else {
    if (value.isExpanded) {
      return applyMark({ change: value.change(), fontFamilyIndex: fontFamilyIndex });
    } else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark');
  }

  return value.change();
};