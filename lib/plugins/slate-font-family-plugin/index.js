'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontFamilyDropdown = exports.FontFamilyUtils = exports.FontFamilyNode = undefined;

var _FontFamilyNode = require('./FontFamilyNode');

var _FontFamilyNode2 = _interopRequireDefault(_FontFamilyNode);

var _FontFamilyUtils = require('./FontFamilyUtils');

var _FontFamilyUtils2 = _interopRequireDefault(_FontFamilyUtils);

var _FontFamilyDropdown = require('./FontFamilyDropdown');

var _FontFamilyDropdown2 = _interopRequireDefault(_FontFamilyDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FontFamilyKeyboardShortcut from './FontFamilyKeyboardShortcut'


exports.default = function (options) {
  return {
    schema: {
      marks: {
        'font-family': _FontFamilyNode2.default
      }
    }
  };
};

exports.FontFamilyNode = _FontFamilyNode2.default;
exports.FontFamilyUtils = _FontFamilyUtils2.default;
exports.FontFamilyDropdown = _FontFamilyDropdown2.default;