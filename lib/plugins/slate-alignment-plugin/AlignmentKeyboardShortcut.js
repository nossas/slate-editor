'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AlignmentUtils = require('./AlignmentUtils');

var AlignmentKeyboardShortcut = function AlignmentKeyboardShortcut(event, data, change) {
  var keyLeft = data.key === 'l';
  var macLeft = data.isCmd && data.isShift && keyLeft;
  var winLeft = data.isAlt && data.isShift && keyLeft;
  var isLeft = macLeft || winLeft;
  if (isLeft) {
    event.preventDefault();
    return (0, _AlignmentUtils.alignLeft)(change);
  }

  var keyCenter = data.key === 'c';
  var macCenter = data.isCmd && data.isShift && keyCenter;
  var winCenter = data.isAlt && data.isShift && keyCenter;
  var isCenter = macCenter || winCenter;
  if (isCenter) {
    event.preventDefault();
    return (0, _AlignmentUtils.alignCenter)(change);
  }

  var keyRight = data.key === 'r';
  var macRight = data.isCmd && data.isShift && keyRight;
  var winRight = data.isAlt && data.isShift && keyRight;
  var isRight = macRight || winRight;
  if (isRight) {
    event.preventDefault();
    return (0, _AlignmentUtils.alignRight)(change);
  }

  return;
};

exports.default = AlignmentKeyboardShortcut;