'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FontSizeUtils = require('./FontSizeUtils');

var FontSizeKeyboardShortcut = function FontSizeKeyboardShortcut(event, data, change, editor, options) {
  var changeState = editor.props.changeState;
  var initialFontSize = options.initialFontSize;


  var modShift = data.isMod && data.isShift;
  var isDecrease = modShift && data.key === ',';
  var isIncrease = modShift && data.key === '.';

  var fontSize = initialFontSize;

  if (isDecrease) return (0, _FontSizeUtils.fontSizeDecrease)({ change: change, fontSize: fontSize, changeState: changeState });
  if (isIncrease) return (0, _FontSizeUtils.fontSizeIncrease)({ change: change, fontSize: fontSize, changeState: changeState });
  return;
};

exports.default = FontSizeKeyboardShortcut;