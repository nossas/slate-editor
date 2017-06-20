'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ModalForm.css');

var ModalForm = function ModalForm(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  return _react2.default.createElement(
    'form',
    _extends({
      className: (0, _classnames2.default)('modal--form', className)
    }, props),
    children
  );
};

ModalForm.Group = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['children', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)('modal--form-group', className)
    }, props),
    children
  );
};

ModalForm.LabelHelper = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      props = _objectWithoutProperties(_ref3, ['children', 'className']);

  return _react2.default.createElement(
    'span',
    _extends({
      className: (0, _classnames2.default)('modal--form-label-helper', className)
    }, props),
    children
  );
};

exports.default = ModalForm;