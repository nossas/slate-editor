'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _FontSizeUtils = require('./FontSizeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontSizeKeyboardShortcut = function FontSizeKeyboardShortcut(event, data, change, editor, options) {
  var changeState = editor.props.changeState;
  var initialFontSize = options.initialFontSize;


  var increase = (0, _keycode2.default)(data.code) === '=';
  var decrease = (0, _keycode2.default)(data.code) === '-';

  var mac = data.isCmd && data.isCtrl;
  var win = data.isCtrl && data.isAlt;

  var isIncreaseMac = mac && increase;
  var isIncreaseWin = win && increase;
  var isIncrease = isIncreaseMac || isIncreaseWin;

  var isDecreaseMac = mac && decrease;
  var isDecreaseWin = win && decrease;
  var isDecrease = isDecreaseMac || isDecreaseWin;

  var fontSize = initialFontSize;

  if (isIncrease) return (0, _FontSizeUtils.fontSizeIncrease)({ change: change, fontSize: fontSize, changeState: changeState });
  if (isDecrease) return (0, _FontSizeUtils.fontSizeDecrease)({ change: change, fontSize: fontSize, changeState: changeState });
  return;
};

exports.default = FontSizeKeyboardShortcut;