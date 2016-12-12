'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (props) {
  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ['children', 'className']);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)("editor--toolbar", className) },
    _Utils2.default.cloneElement(children, rest)
  );
};