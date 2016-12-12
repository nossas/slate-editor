'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStateModel = exports.ColorKeyboardShortcut = exports.ColorButton = exports.ColorUtils = exports.ColorMark = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
// onSelect
//


var _ColorMark = require('./ColorMark');

var _ColorMark2 = _interopRequireDefault(_ColorMark);

var _ColorUtils = require('./ColorUtils');

var _ColorUtils2 = _interopRequireDefault(_ColorUtils);

var _ColorButton = require('./ColorButton');

var _ColorButton2 = _interopRequireDefault(_ColorButton);

var _ColorKeyboardShortcut = require('./ColorKeyboardShortcut');

var _ColorKeyboardShortcut2 = _interopRequireDefault(_ColorKeyboardShortcut);

var _ColorStateModel = require('./ColorStateModel');

var _ColorStateModel2 = _interopRequireDefault(_ColorStateModel);

var _SelectionPickerColorUpdate = require('./SelectionPickerColorUpdate');

var _SelectionPickerColorUpdate2 = _interopRequireDefault(_SelectionPickerColorUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _extends({
    schema: {
      marks: {
        'color': _ColorMark2.default
      }
    }
  }, _ColorKeyboardShortcut2.default, {
    onSelect: function onSelect() {
      _SelectionPickerColorUpdate2.default.apply(undefined, arguments);
    }
  });
};

exports.ColorMark = _ColorMark2.default;
exports.ColorUtils = _ColorUtils2.default;
exports.ColorButton = _ColorButton2.default;
exports.ColorKeyboardShortcut = _ColorKeyboardShortcut2.default;
exports.ColorStateModel = _ColorStateModel2.default;