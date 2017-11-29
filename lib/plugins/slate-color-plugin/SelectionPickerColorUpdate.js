'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ColorUtils = require('./ColorUtils');

var ColorUtils = _interopRequireWildcard(_ColorUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SelectionPickerColorUpdate = function SelectionPickerColorUpdate(event, change, editor) {
  var hasMark = ColorUtils.hasMark,
      getMark = ColorUtils.getMark;
  var _editor$props = editor.props,
      outerState = _editor$props.outerState,
      changeState = _editor$props.changeState;
  var color = outerState.color;
  var value = change.value;


  if (hasMark(value)) {
    var rgba = getMark(value).data.get('rgba');
    changeState({ color: _extends({}, color, { rgba: rgba }) });
  }
};

exports.default = SelectionPickerColorUpdate;