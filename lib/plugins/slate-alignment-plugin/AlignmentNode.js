'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignmentNode = function AlignmentNode(_ref) {
  var children = _ref.children,
      data = _ref.node.data;

  var Node = 'div';
  if (data.get('currentBlockType') === 'grid-cell') Node = 'td';

  return _react2.default.createElement(
    Node,
    { style: { textAlign: '' + data.get('align') } },
    children
  );
};

exports.default = AlignmentNode;