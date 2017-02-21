'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (process.env.REACT_APP_BROWSER || process.env.BROWSER) require('./LinkNode.css');

var LinkNode = function LinkNode(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      data = _ref.node.data,
      readOnly = _ref.editor.props.readOnly;
  return _react2.default.createElement(
    'a',
    _extends({}, attributes, {
      className: 'link-node',
      href: data.get('href'),
      target: data.get('target'),
      title: data.get('title'),
      onClick: function onClick(_ref2) {
        var tagName = _ref2.target.tagName;

        if (readOnly && tagName === 'IMG') window.location = data.get('href');
      }
    }),
    children
  );
};

exports.default = LinkNode;