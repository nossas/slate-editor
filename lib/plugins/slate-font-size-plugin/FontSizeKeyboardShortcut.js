'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboardEvent = require('../../utils/keyboard-event');

var _FontSizeUtils = require('./FontSizeUtils');

var FontSizeKeyboardShortcut = function FontSizeKeyboardShortcut(event, change, editor, options) {
  var changeState = editor.props.changeState;
  var initialFontSize = options.initialFontSize;


  var modShift = (0, _keyboardEvent.isMod)(event) && event.shiftKey;
  var isDecrease = modShift && event.key === ',';
  var isIncrease = modShift && event.key === '.';

  var fontSize = initialFontSize;

  if (isDecrease) return (0, _FontSizeUtils.fontSizeDecrease)({ change: change, fontSize: fontSize, changeState: changeState });
  if (isIncrease) return (0, _FontSizeUtils.fontSizeIncrease)({ change: change, fontSize: fontSize, changeState: changeState });
  return;
};

exports.default = FontSizeKeyboardShortcut;