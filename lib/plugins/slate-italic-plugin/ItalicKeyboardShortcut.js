'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _ItalicUtils = require('./ItalicUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItalicKeyboardShortcut = {
  onKeyDown: function onKeyDown(event, data, state) {
    var command = data.isMod && !event.shiftKey && (0, _keycode2.default)(data.code) === 'i';
    if (command) return (0, _ItalicUtils.italicMarkStrategy)(state);
    return;
  }
};

exports.default = ItalicKeyboardShortcut;