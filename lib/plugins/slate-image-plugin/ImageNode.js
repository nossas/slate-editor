'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./ImageNode.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageNode = function ImageNode(_ref) {
  var node = _ref.node,
      state = _ref.state,
      attributes = _ref.attributes,
      readOnly = _ref.editor.props.readOnly;
  return _react2.default.createElement('img', _extends({}, attributes, {
    role: 'presentation',
    className: (0, _classnames2.default)('image-node', {
      readonly: readOnly,
      active: state.selection.hasEdgeIn(node)
    }),
    src: node.data.get('src')
  }));
};

exports.default = ImageNode;