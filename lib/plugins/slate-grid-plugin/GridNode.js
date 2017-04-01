'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridNode = function GridNode(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children;
  return _react2.default.createElement(
    'table',
    { style: { width: '100%', tableLayout: 'fixed' } },
    _react2.default.createElement(
      'tbody',
      attributes,
      children
    )
  );
};

exports.default = GridNode;