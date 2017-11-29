'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react3 = require('../utils/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'style', 'className']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('editor--toolbar', className), style: style },
    (0, _react3.cloneElement)(children, rest)
  );
};