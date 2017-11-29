'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ColorKeyboardShortcut = function ColorKeyboardShortcut(event, change, editor) {
  var _editor$props = editor.props,
      changeState = _editor$props.changeState,
      outerState = _editor$props.outerState;
  var color = outerState.color;
  var showPicker = color.showPicker;


  var key = event.key === 'l';
  var mac = event.ctrlKey && event.metaKey && key;
  var win = event.ctrlKey && event.altKey && key;

  if (mac || win) changeState({ color: _extends({}, color, { showPicker: !showPicker }) });
  return;
};

exports.default = ColorKeyboardShortcut;