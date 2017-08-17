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
  var state = _ref.state,
      readOnly = _ref.outerState.readOnly,
      onChange = _ref.onChange,
      changeState = _ref.changeState,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    _button.Button,
    {
      className: className,
      style: style,
      onClick: function onClick(e) {
        return changeState({ state: state, readOnly: !readOnly });
      }
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: readOnly ? 'toggle-on' : 'toggle-off', style: { marginRight: 5 } }),
    'Read Only'
  );
};

exports.default = ToggleReadOnlyButton;