'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListUtils = require('./ListUtils');

var ListKeyboardShortcut = function ListKeyboardShortcut(event, change) {
  //
  // Behaviour to increase or decrease depth of the list.
  //
  if (event.key === 'Tab') {
    event.preventDefault();
    if (event.shiftKey) return (0, _ListUtils.decreaseListDepthStrategy)(change);
    return (0, _ListUtils.increaseListDepthStrategy)(change);
  }

  var unorderedKey = event.key === 'l';
  var macUnordered = event.ctrlKey && event.shiftKey && unorderedKey;
  var winUnordered = event.altKey && event.shiftKey && unorderedKey;
  var isUnordered = macUnordered || winUnordered;
  if (isUnordered) return (0, _ListUtils.unorderedListStrategy)(change);

  var orderedKey = event.key === 'n';
  var macOrdered = event.ctrlKey && event.shiftKey && orderedKey;
  var winOrdered = event.altKey && event.shiftKey && orderedKey;
  var isOrdered = macOrdered || winOrdered;
  if (isOrdered) return (0, _ListUtils.orderedListStrategy)(change);

  return;
};

exports.default = ListKeyboardShortcut;