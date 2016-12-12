'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderedListNode = function OrderedListNode(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children;
  return _react2.default.createElement(
    'ol',
    attributes,
    children
  );
};

exports.default = OrderedListNode;