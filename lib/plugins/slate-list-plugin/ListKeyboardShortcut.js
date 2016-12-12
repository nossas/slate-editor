'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _ListUtils = require('./ListUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListKeyboardShortcut = {
  onKeyDown: function onKeyDown(event, data, state, editor) {

    //
    // Behaviour to increase or decrease depth of the list.
    //
    if ((0, _keycode2.default)(data.code) === 'tab') {
      event.preventDefault();
      if (data.isShift) return (0, _ListUtils.decreaseListDepthStrategy)(state);
      return (0, _ListUtils.increaseListDepthStrategy)(state);
    }

    var unorderedKey = (0, _keycode2.default)(data.code) === 'l';
    var macUnordered = data.isCtrl && data.isShift && unorderedKey;
    var winUnordered = data.isAlt && data.isShift && unorderedKey;
    var isUnordered = macUnordered || winUnordered;
    if (isUnordered) return (0, _ListUtils.unorderedListStrategy)(state);

    var orderedKey = (0, _keycode2.default)(data.code) === 'n';
    var macOrdered = data.isCtrl && data.isShift && orderedKey;
    var winOrdered = data.isAlt && data.isShift && orderedKey;
    var isOrdered = macOrdered || winOrdered;
    if (isOrdered) return (0, _ListUtils.orderedListStrategy)(state);

    return;
  }
};

exports.default = ListKeyboardShortcut;