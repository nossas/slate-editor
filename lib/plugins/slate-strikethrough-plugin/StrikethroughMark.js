'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StrikethroughMark = function StrikethroughMark(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'del',
    null,
    children
  );
};

exports.default = StrikethroughMark;