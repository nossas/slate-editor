'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontSizeMark = function FontSizeMark(_ref) {
  var children = _ref.children,
      data = _ref.mark.data;
  return _react2.default.createElement(
    'span',
    {
      style: {
        fontSize: parseInt(data.get('fontSize'), 10),
        verticalAlign: 'middle'
      }
    },
    children
  );
};

exports.default = FontSizeMark;