'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _ImageUtils = require('./ImageUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageKeyboardShortcut = {
  onKeyDown: function onKeyDown(event, data, state) {
    var command = data.isMod && event.shiftKey && (0, _keycode2.default)(data.code) === 'i';
    if (command) return (0, _ImageUtils.insertImageStrategy)(state);
    return;
  }
};

exports.default = ImageKeyboardShortcut;