'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorMark = function ColorMark(_ref) {
  var children = _ref.children,
      data = _ref.mark.data;

  var _data$get = data.get('rgba'),
      r = _data$get.r,
      g = _data$get.g,
      b = _data$get.b,
      a = _data$get.a;

  return _react2.default.createElement(
    'span',
    { style: { color: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')' } },
    children
  );
};

exports.default = ColorMark;