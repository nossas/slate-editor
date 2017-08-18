'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preventDefault = function preventDefault(callback) {
  return function (e) {
    e.preventDefault();
    if (callback) {
      callback(e);
    }
  };
};

exports.default = function (_ref) {
  var children = _ref.children,
      id = _ref.id,
      onClick = _ref.onClick,
      className = _ref.className,
      style = _ref.style,
      type = _ref.type;

  var buttonType = type || 'button'; // Make button default so that when used in forms, "submit" does not become default
  return _react2.default.createElement(
    'button',
    {
      id: id,
      style: style,
      onClick: preventDefault(onClick),
      className: className,
      type: buttonType
    },
    children
  );
};