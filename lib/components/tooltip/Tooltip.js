'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./Tooltip.css');

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({}, props, {
      className: 'tooltip--container',
      contentEditable: false
    }),
    children
  );
};

Tooltip.Item = function (_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({}, props, { className: 'tooltip--item' }),
    children
  );
};

exports.default = Tooltip;