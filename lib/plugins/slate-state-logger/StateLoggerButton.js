'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _jsonBeautify = require('json-beautify');

var _jsonBeautify2 = _interopRequireDefault(_jsonBeautify);

var _button = require('../../components/button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StateLoggerButton = function StateLoggerButton(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      className = _ref.className,
      style = _ref.style,
      type = _ref.type;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _button.Button,
      {
        className: className,
        style: style,
        type: type,
        onClick: function onClick(e) {
          e.preventDefault();
          console.groupCollapsed('[State Logger]');
          console.info('State', (0, _jsonBeautify2.default)(value, null, 2, 100));
          console.info('State Serialized', (0, _jsonBeautify2.default)(value.toJS(), null, 2, 100));
          console.groupEnd();
        }
      },
      _react2.default.createElement(_reactFontawesome2.default, { name: 'code', style: { marginRight: 5 } }),
      'State Logger'
    )
  );
};

exports.default = StateLoggerButton;