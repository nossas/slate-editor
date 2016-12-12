'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _AlignmentUtils = require('./AlignmentUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignmentKeyboardShortcut = {
  onKeyDown: function onKeyDown(event, data, state) {
    if (!data.isMod || (0, _keycode2.default)(data.code) !== 'b') return;
    return (0, _AlignmentUtils.alignmentMarkStrategy)(state);
  }
};

exports.default = AlignmentKeyboardShortcut;