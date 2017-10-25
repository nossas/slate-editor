'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeFilter = exports.typeFilter = function typeFilter(mark) {
  return mark.type === 'color';
};
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(typeFilter);
};
var getMarks = exports.getMarks = function getMarks(state) {
  return state.marks.filter(typeFilter);
};
var getMark = exports.getMark = function getMark(state) {
  return state.marks.filter(typeFilter).first();
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
  getMarks(change.state).map(function (mark) {
    return change.removeMark(mark);
  });

  return change.addMark(createMark(rgba)).focus();
};

var applyMark = exports.applyMark = function applyMark(_ref2) {
  var change = _ref2.change,
      rgba = _ref2.rgba;
  return change.addMark(createMark(rgba)).focus();
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
  var state = attributes.state,
      rgba = attributes.rgba;


  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark({ change: state.change(), rgba: rgba });
    } else console.info('[SlateJS][ColorPlugin] selection collapsed, w/ mark exists');
  } else {
    if (state.isExpanded) {
      return applyMark({ change: state.change(), rgba: rgba });
    } else console.info('[SlateJS][ColorPlugin] selection collapsed, w/o mark');
  }

  return state.change();
};