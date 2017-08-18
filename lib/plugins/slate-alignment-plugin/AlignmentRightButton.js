'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _AlignmentUtils = require('./AlignmentUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignmentRightButton = function AlignmentRightButton(_ref) {
  var state = _ref.state,
      onChange = _ref.onChange,
      changeState = _ref.changeState,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'button',
    {
      style: style,
      onClick: function onClick(e) {
        return onChange((0, _AlignmentUtils.alignmentMarkStrategy)(state, 'right'));
      },
      className: (0, _classnames2.default)('slate-alignment-plugin--button', { active: (0, _AlignmentUtils.hasMark)(state) && (0, _AlignmentUtils.getMark)(state).data.get('align') === 'right' }, className)
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'align-right' })
  );
};

exports.default = AlignmentRightButton;