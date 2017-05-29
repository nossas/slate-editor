'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ModalContent.css');

var ModalContent = function ModalContent(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'modal--content' },
    children
  );
};

ModalContent.Left = function (_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'div',
    { className: 'modal--content-left' },
    children
  );
};

ModalContent.Right = function (_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    'div',
    { className: 'modal--content-right' },
    children
  );
};

exports.default = ModalContent;