'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _typeCheck = require('../../utils/type-check');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      id = _ref.id,
      _onClick = _ref.onClick,
      className = _ref.className,
      style = _ref.style,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['children', 'id', 'onClick', 'className', 'style', 'type']);

  return _react2.default.createElement(
    'button',
    _extends({
      id: id,
      style: style,
      type: type,
      onClick: function onClick(e) {
        return (0, _typeCheck.isFunction)(_onClick) && _onClick(e);
      },
      className: className
    }, props),
    children
  );
};

Button.defaultProps = {
  type: 'button'
};

exports.default = Button;