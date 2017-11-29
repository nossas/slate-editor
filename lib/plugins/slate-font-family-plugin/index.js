'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontFamilyDropdown = exports.FontFamilyUtils = exports.FontFamilyMark = exports.FontFamilyPlugin = undefined;

var _FontFamilyMark = require('./FontFamilyMark');

var _FontFamilyMark2 = _interopRequireDefault(_FontFamilyMark);

var _FontFamilyUtils = require('./FontFamilyUtils');

var FontFamilyUtils = _interopRequireWildcard(_FontFamilyUtils);

var _FontFamilyDropdown = require('./FontFamilyDropdown');

var _FontFamilyDropdown2 = _interopRequireDefault(_FontFamilyDropdown);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Keyboard
//
// import FontFamilyKeyboardShortcut from './FontFamilyKeyboardShortcut'

//
// External
//
var FontFamilyPlugin = function FontFamilyPlugin(options) {
  return {

    // onKeyDown(...args) {
    //   return FontFamilyKeyboardShortcut(...args)
    // },
  };
}; //
// Rendering
//
exports.FontFamilyPlugin = FontFamilyPlugin;
exports.FontFamilyMark = _FontFamilyMark2.default;
exports.FontFamilyUtils = FontFamilyUtils;
exports.FontFamilyDropdown = _FontFamilyDropdown2.default;