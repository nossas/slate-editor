'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(function (mark) {
    return mark.type === 'font-family';
  });
};
var getMark = exports.getMark = function getMark(state) {
  return state.marks.filter(function (mark) {
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
  return change.removeMark(getMark(change.state)).addMark(createMark(fontFamilyIndex)).focus();
};

var applyMark = exports.applyMark = function applyMark(_ref2) {
  var change = _ref2.change,
      fontFamilyIndex = _ref2.fontFamilyIndex;
  return change.addMark(createMark(fontFamilyIndex)).focus();
};

/**
 * Strategy that decides how font family mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {State} state
 *    @property {int} fontFamilyIndex
 */
var fontFamilyMarkStrategy = exports.fontFamilyMarkStrategy = function fontFamilyMarkStrategy(attributes) {
  var state = attributes.state,
      fontFamilyIndex = attributes.fontFamilyIndex;


  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark({ change: state.change(), fontFamilyIndex: fontFamilyIndex });
    } else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists');
  } else {
    if (state.isExpanded) {
      return applyMark({ change: state.change(), fontFamilyIndex: fontFamilyIndex });
    } else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark');
  }

  return state.change();
};