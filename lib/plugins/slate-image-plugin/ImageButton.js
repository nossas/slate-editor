'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _ImageUtils = require('./ImageUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageButton = function ImageButton(_ref) {
  var state = _ref.state,
      onChange = _ref.onChange,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'button',
    {
      style: style,
      className: className,
      onClick: function onClick(e) {
        return onChange((0, _ImageUtils.insertImageStrategy)(state));
      }
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'image' })
  );
};

exports.default = ImageButton;