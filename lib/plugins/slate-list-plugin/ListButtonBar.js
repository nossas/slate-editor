'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ListButtonBar.css');

var ListButtonBar = function ListButtonBar(props) {
  return _react2.default.createElement(
    'div',
    { className: 'slate-list-plugin--button-bar' },
    _react2.default.createElement(_.UnorderedListButton, props),
    _react2.default.createElement(_.OrderedListButton, props)
  );
};

exports.default = ListButtonBar;