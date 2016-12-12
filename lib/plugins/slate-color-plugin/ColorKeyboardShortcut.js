'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorKeyboardShortcut = {
  onKeyDown: function onKeyDown(event, data, state, editor) {
    var _editor$props = editor.props,
        changeState = _editor$props.changeState,
        outerState = _editor$props.outerState;
    var color = outerState.color;
    var showPicker = color.showPicker;


    var key = (0, _keycode2.default)(data.code) === 'l';
    var mac = data.isCmd && data.isShift && key;
    var win = data.isAlt && data.isShift && key;

    if (mac || win) changeState({ color: _extends({}, color, { showPicker: !showPicker }) });
    return;
  }
};

exports.default = ColorKeyboardShortcut;