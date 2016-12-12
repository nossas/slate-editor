'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

require('./AlignmentButtonBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignmentButtonBar = function AlignmentButtonBar(props) {
  return _react2.default.createElement(
    'div',
    { className: 'slate-alignment-plugin--button-bar' },
    _react2.default.createElement(_.AlignmentLeftButton, props),
    _react2.default.createElement(_.AlignmentCenterButton, props),
    _react2.default.createElement(_.AlignmentRightButton, props)
  );
};

exports.default = AlignmentButtonBar;