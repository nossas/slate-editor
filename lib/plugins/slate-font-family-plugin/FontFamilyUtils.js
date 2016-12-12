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
  var state = _ref.state,
      fontFamilyIndex = _ref.fontFamilyIndex;
  return state.transform().removeMark(getMark(state)).addMark(createMark(fontFamilyIndex)).focus().apply();
};

var applyMark = exports.applyMark = function applyMark(_ref2) {
  var state = _ref2.state,
      fontFamilyIndex = _ref2.fontFamilyIndex;
  return state.transform().addMark(createMark(fontFamilyIndex)).focus().apply();
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
  var state = attributes.state;


  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark(attributes);
    } else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists');
  } else {
    if (state.isExpanded) {
      return applyMark(attributes);
    } else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark');
  }

  return state;
};