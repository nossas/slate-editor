'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./EmbedNode.css');

var EmbedNode = function EmbedNode(_ref) {
  var attributes = _ref.attributes,
      editor = _ref.editor,
      children = _ref.children,
      node = _ref.node,
      isSelected = _ref.isSelected;

  return _react2.default.createElement('span', _extends({}, attributes, {
    className: (0, _classnames2.default)('slate-embed-plugin--node', { active: isSelected }),
    dangerouslySetInnerHTML: { __html: node.data.get('embed') }
  }));
};

exports.default = EmbedNode;