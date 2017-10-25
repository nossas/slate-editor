'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(function (mark) {
    return mark.type === 'font-size';
  });
};
var getMark = exports.getMark = function getMark(state) {
  return state.marks.filter(function (mark) {
    return mark.type === 'font-size';
  }).first();
};

var createMark = exports.createMark = function createMark(fontSize) {
  return {
    type: 'font-size',
    data: { fontSize: fontSize }
  };
};

/**
 * Strategy that decides how increase font size node needs to be applied.
 *
 * @param {Object}
 *    @property {State} state
 *    @property {int} fontSize
 *    @property {function} changeState
 */
var fontSizeStrategy = exports.fontSizeStrategy = function fontSizeStrategy(_ref) {
  var change = _ref.change,
      fontSize = _ref.fontSize,
      changeState = _ref.changeState;
  var state = change.state;

  if (hasMark(state)) {
    if (state.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize: fontSize });
      return change.removeMark(getMark(state)).addMark(createMark(fontSize)).focus();
    } else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/ inline.');
  } else {
    if (state.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize: fontSize });
      return change.addMark(createMark(fontSize)).focus();
    } else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/o inline.');
  }

  return change;
};

var fontSizeLocationStrategy = function fontSizeLocationStrategy(_ref2) {
  var change = _ref2.change,
      fontSize = _ref2.fontSize;
  return hasMark(change.state) ? Number(getMark(change.state).data.get('fontSize')) : Number(fontSize);
};

var fontSizeIncrease = exports.fontSizeIncrease = function fontSizeIncrease(_ref3) {
  var change = _ref3.change,
      fontSize = _ref3.fontSize,
      changeState = _ref3.changeState;
  return fontSizeStrategy({
    change: change,
    changeState: changeState,
    fontSize: fontSizeLocationStrategy({ change: change, fontSize: fontSize }) + 1
  });
};

var fontSizeDecrease = exports.fontSizeDecrease = function fontSizeDecrease(_ref4) {
  var change = _ref4.change,
      fontSize = _ref4.fontSize,
      changeState = _ref4.changeState;
  return fontSizeStrategy({
    change: change,
    changeState: changeState,
    fontSize: fontSizeLocationStrategy({ change: change, fontSize: fontSize }) - 1
  });
};