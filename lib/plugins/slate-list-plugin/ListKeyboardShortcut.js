'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListUtils = require('./ListUtils');

var ListKeyboardShortcut = function ListKeyboardShortcut(event, data, change) {
  //
  // Behaviour to increase or decrease depth of the list.
  //
  if (data.key === 'tab') {
    event.preventDefault();
    if (data.isShift) return (0, _ListUtils.decreaseListDepthStrategy)(change);
    return (0, _ListUtils.increaseListDepthStrategy)(change);
  }

  var unorderedKey = data.key === 'l';
  var macUnordered = data.isCtrl && data.isShift && unorderedKey;
  var winUnordered = data.isAlt && data.isShift && unorderedKey;
  var isUnordered = macUnordered || winUnordered;
  if (isUnordered) return (0, _ListUtils.unorderedListStrategy)(change);

  var orderedKey = data.key === 'n';
  var macOrdered = data.isCtrl && data.isShift && orderedKey;
  var winOrdered = data.isAlt && data.isShift && orderedKey;
  var isOrdered = macOrdered || winOrdered;
  if (isOrdered) return (0, _ListUtils.orderedListStrategy)(change);

  return;
};

exports.default = ListKeyboardShortcut;