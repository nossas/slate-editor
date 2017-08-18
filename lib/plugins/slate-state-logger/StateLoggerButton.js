'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _slate = require('slate');

var _jsonBeautify = require('json-beautify');

var _jsonBeautify2 = _interopRequireDefault(_jsonBeautify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkButton = function LinkButton(_ref) {
  var state = _ref.state,
      onChange = _ref.onChange,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'button',
      {
        className: className,
        style: style,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          console.groupCollapsed('[State Logger]');
          console.info('State', (0, _jsonBeautify2.default)(state, null, 2, 100));
          console.info('State Serialized', (0, _jsonBeautify2.default)(_slate.Raw.serialize(state), null, 2, 100));
          console.info('State Serialized (Terse)', (0, _jsonBeautify2.default)(_slate.Raw.serialize(state, { terse: true }), null, 2, 100));
          console.groupEnd();
        }
      },
      _react2.default.createElement(_reactFontawesome2.default, { name: 'code', style: { marginRight: 5 } }),
      'State Logger'
    )
  );
};

exports.default = LinkButton;