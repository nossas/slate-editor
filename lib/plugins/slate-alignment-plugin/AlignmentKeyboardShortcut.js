'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AlignmentUtils = require('./AlignmentUtils');

var AlignmentKeyboardShortcut = function AlignmentKeyboardShortcut(event, change) {
  var keyLeft = event.key === 'l';
  var macLeft = event.metaKey && event.shiftKey && keyLeft;
  var winLeft = event.altKey && event.shiftKey && keyLeft;
  var isLeft = macLeft || winLeft;
  if (isLeft) {
    event.preventDefault();
    return (0, _AlignmentUtils.alignLeft)(change);
  }

  var keyCenter = event.key === 'c';
  var macCenter = event.metaKey && event.shiftKey && keyCenter;
  var winCenter = event.altKey && event.shiftKey && keyCenter;
  var isCenter = macCenter || winCenter;
  if (isCenter) {
    event.preventDefault();
    return (0, _AlignmentUtils.alignCenter)(change);
  }

  var keyRight = event.key === 'r';
  var macRight = event.metaKey && event.shiftKey && keyRight;
  var winRight = event.altKey && event.shiftKey && keyRight;
  var isRight = macRight || winRight;
  if (isRight) {
    event.preventDefault();
    return (0, _AlignmentUtils.alignRight)(change);
  }

  return;
};

exports.default = AlignmentKeyboardShortcut;