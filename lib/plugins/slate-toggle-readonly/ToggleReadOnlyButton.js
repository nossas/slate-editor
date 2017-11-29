'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _button = require('../../components/button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleReadOnlyButton = function ToggleReadOnlyButton(_ref) {
  var value = _ref.value,
      readOnly = _ref.outerState.readOnly,
      onChange = _ref.onChange,
      changeState = _ref.changeState,
      className = _ref.className,
      style = _ref.style,
      type = _ref.type;
  return _react2.default.createElement(
    _button.Button,
    {
      className: className,
      style: style,
      type: type,
      onClick: function onClick(e) {
        return changeState({ value: value, readOnly: !readOnly });
      }
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: readOnly ? 'toggle-on' : 'toggle-off', style: { marginRight: 5 } }),
    'Read Only'
  );
};

exports.default = ToggleReadOnlyButton;