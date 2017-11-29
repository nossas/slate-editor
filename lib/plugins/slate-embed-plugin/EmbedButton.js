'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../../components/button');

var _EmbedUtils = require('./EmbedUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmbedButton = function EmbedButton(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      changeState = _ref.changeState,
      className = _ref.className,
      style = _ref.style,
      type = _ref.type;
  return _react2.default.createElement(
    _button.Button,
    {
      style: style,
      type: type,
      onClick: function onClick(e) {
        return onChange((0, _EmbedUtils.appendEmbed)(value.change()));
      },
      className: (0, _classnames2.default)('slate-embed-plugin--button', { active: (0, _EmbedUtils.hasEmbed)(value) }, className)
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'code' })
  );
};

exports.default = EmbedButton;