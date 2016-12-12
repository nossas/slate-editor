'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStateModel = exports.ColorButton = exports.ColorUtils = exports.ColorKeyboardShortcut = exports.ColorMark = exports.ColorSchema = undefined;

var _ColorSchema = require('./ColorSchema');

var _ColorSchema2 = _interopRequireDefault(_ColorSchema);

var _ColorMark = require('./ColorMark');

var _ColorMark2 = _interopRequireDefault(_ColorMark);

var _ColorKeyboardShortcut = require('./ColorKeyboardShortcut');

var _ColorKeyboardShortcut2 = _interopRequireDefault(_ColorKeyboardShortcut);

var _ColorUtils = require('./ColorUtils');

var _ColorUtils2 = _interopRequireDefault(_ColorUtils);

var _ColorButton = require('./ColorButton');

var _ColorButton2 = _interopRequireDefault(_ColorButton);

var _ColorStateModel = require('./ColorStateModel');

var _ColorStateModel2 = _interopRequireDefault(_ColorStateModel);

var _SelectionPickerColorUpdate = require('./SelectionPickerColorUpdate');

var _SelectionPickerColorUpdate2 = _interopRequireDefault(_SelectionPickerColorUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
exports.default = function (options) {
  return {
    schema: _ColorSchema2.default,

    onKeyDown: function onKeyDown() {
      return _ColorKeyboardShortcut2.default.apply(undefined, arguments);
    },
    onSelect: function onSelect() {
      _SelectionPickerColorUpdate2.default.apply(undefined, arguments);
    }
  };
};

//
// Selection
//


//
// Keyboard
//
//
// Schema
//


exports.ColorSchema = _ColorSchema2.default;
exports.ColorMark = _ColorMark2.default;
exports.ColorKeyboardShortcut = _ColorKeyboardShortcut2.default;
exports.ColorUtils = _ColorUtils2.default;
exports.ColorButton = _ColorButton2.default;
exports.ColorStateModel = _ColorStateModel2.default;