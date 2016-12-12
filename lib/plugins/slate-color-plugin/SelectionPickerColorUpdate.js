'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ColorUtils = require('./ColorUtils');

var _ColorUtils2 = _interopRequireDefault(_ColorUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectionPickerColorUpdate = function SelectionPickerColorUpdate(event, data, state, editor) {
  var hasMark = _ColorUtils2.default.hasMark,
      getMark = _ColorUtils2.default.getMark;
  var _editor$props = editor.props,
      outerState = _editor$props.outerState,
      changeState = _editor$props.changeState;
  var color = outerState.color;


  if (hasMark(state)) {
    var rgba = getMark(state).data.get('rgba');
    changeState({ color: _extends({}, color, { rgba: rgba }) });
  }
};

exports.default = SelectionPickerColorUpdate;