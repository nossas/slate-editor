'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FontSizeUtils = require('./FontSizeUtils');

var SelectionUpdateInputValue = function SelectionUpdateInputValue(event, data, state, editor, options) {
  var changeState = editor.props.changeState;
  var initialFontSize = options.initialFontSize;

  // If do not have font-size mark in selection, update input with initial font size.

  if (!(0, _FontSizeUtils.hasMark)(state)) changeState({ fontSize: initialFontSize });

  // If it have font-size mark in selection, update input with mark data font size.
  if ((0, _FontSizeUtils.hasMark)(state)) changeState({ fontSize: (0, _FontSizeUtils.getMark)(state).data.get('fontSize') });
};

exports.default = SelectionUpdateInputValue;