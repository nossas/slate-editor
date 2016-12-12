'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cloneElement = function cloneElement(children, props) {
  if (children && !children.length) {
    children = [children];
  }

  return children && children.map(function (child, index) {
    return _react2.default.cloneElement(child, _extends({}, props, {
      key: index
    }));
  });
};

exports.default = {
  cloneElement: cloneElement
};