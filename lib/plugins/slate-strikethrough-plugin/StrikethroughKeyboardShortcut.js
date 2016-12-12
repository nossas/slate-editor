'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _StrikethroughUtils = require('./StrikethroughUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StrikethroughKeyboardShortcut = {
  onKeyDown: function onKeyDown(event, data, state) {
    var key = (0, _keycode2.default)(data.code) === 's';
    var mac = data.isCmd && data.isCtrl && key;
    var win = data.isCtrl && data.isAlt && key;

    if (mac || win) return (0, _StrikethroughUtils.strikethroughMarkStrategy)(state);
    return;
  }
};

exports.default = StrikethroughKeyboardShortcut;