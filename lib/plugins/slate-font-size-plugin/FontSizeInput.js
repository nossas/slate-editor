'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FontSizeUtils = require('./FontSizeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./FontSizeInput.css');

//
// It needs to check out how solve the warning below:
//
// warning.js:36 Warning: FontSizeInput is changing an uncontrolled input of
// type number to be controlled. Input elements should not switch from uncontrolled
// to controlled (or vice versa). Decide between using a controlled or uncontrolled
// input element for the lifetime of the component.
// More info: https://fb.me/react-controlled-components
//
var FontSizeInput = function FontSizeInput(_ref) {
  var value = _ref.value,
      className = _ref.className,
      style = _ref.style,
      changeState = _ref.changeState,
      initialFontSize = _ref.initialFontSize,
      fontSizeState = _ref.outerState.fontSize;

  if (!fontSizeState) changeState({ value: value, fontSize: initialFontSize });

  return _react2.default.createElement('input', {
    onChange: function onChange(_ref2) {
      var fontSizeValue = _ref2.target.value;

      if (Number(fontSizeValue) <= 0) fontSizeValue = '1';
      var fontSize = fontSizeValue || '1';
      var fontSizeState = (0, _FontSizeUtils.fontSizeStrategy)({
        change: value.change(),
        fontSize: fontSize,
        changeState: changeState
      }).value;
      changeState({ fontSize: fontSize, value: fontSizeState });
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    className: (0, _classnames2.default)('slate-font-size-plugin-input', className),
    style: style,
    type: 'number',
    value: fontSizeState || initialFontSize,
    min: '1'
  });
};

exports.default = FontSizeInput;