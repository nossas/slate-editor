'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(function (mark) {
    return mark.type === 'color';
  });
};
var getMark = exports.getMark = function getMark(state) {
  return state.marks.filter(function (mark) {
    return mark.type === 'color';
  }).first();
};

var createMark = exports.createMark = function createMark(rgba) {
  return {
    type: 'color',
    data: { rgba: rgba }
  };
};

var reapplyMark = exports.reapplyMark = function reapplyMark(_ref) {
  var state = _ref.state,
      rgba = _ref.rgba;
  return state.transform().removeMark(getMark(state)).addMark(createMark(rgba)).focus().apply();
};

var applyMark = exports.applyMark = function applyMark(_ref2) {
  var state = _ref2.state,
      rgba = _ref2.rgba;
  return state.transform().addMark(createMark(rgba)).focus().apply();
};

/**
 * Strategy that decides how color mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {State} state
 *    @property {Object} rgba
 *        @property {int} r
 *        @property {int} g
 *        @property {int} b
 *        @property {int} a
 */
var colorMarkStrategy = exports.colorMarkStrategy = function colorMarkStrategy(attributes) {
  var state = attributes.state;


  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark(attributes);
    } else console.info('[SlateJS][ColorPlugin] selection collapsed, w/ mark exists');
  } else {
    if (state.isExpanded) {
      return applyMark(attributes);
    } else console.info('[SlateJS][ColorPlugin] selection collapsed, w/o mark');
  }

  return state;
};