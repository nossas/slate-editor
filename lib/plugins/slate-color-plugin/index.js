'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStateModel = exports.ColorButton = exports.ColorUtils = exports.ColorKeyboardShortcut = exports.ColorMark = exports.ColorPlugin = undefined;

var _ColorMark = require('./ColorMark');

var _ColorMark2 = _interopRequireDefault(_ColorMark);

var _ColorKeyboardShortcut = require('./ColorKeyboardShortcut');

var _ColorKeyboardShortcut2 = _interopRequireDefault(_ColorKeyboardShortcut);

var _ColorUtils = require('./ColorUtils');

var ColorUtils = _interopRequireWildcard(_ColorUtils);

var _ColorButton = require('./ColorButton');

var _ColorButton2 = _interopRequireDefault(_ColorButton);

var _ColorStateModel = require('./ColorStateModel');

var _ColorStateModel2 = _interopRequireDefault(_ColorStateModel);

var _SelectionPickerColorUpdate = require('./SelectionPickerColorUpdate');

var _SelectionPickerColorUpdate2 = _interopRequireDefault(_SelectionPickerColorUpdate);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
//
// Rendering
//
var ColorPlugin = function ColorPlugin(options) {
  return {
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
exports.ColorPlugin = ColorPlugin;
exports.ColorMark = _ColorMark2.default;
exports.ColorKeyboardShortcut = _ColorKeyboardShortcut2.default;
exports.ColorUtils = ColorUtils;
exports.ColorButton = _ColorButton2.default;
exports.ColorStateModel = _ColorStateModel2.default;