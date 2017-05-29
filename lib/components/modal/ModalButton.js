'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ModalButton.css');

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'modal-button--container' },
    children
  );
};

var Primary = function Primary(_ref2) {
  var text = _ref2.text,
      _ref2$type = _ref2.type,
      type = _ref2$type === undefined ? 'button' : _ref2$type,
      onClick = _ref2.onClick;
  return _react2.default.createElement(
    'button',
    {
      type: type,
      className: 'primary',
      onClick: onClick
    },
    text
  );
};

var Opaque = function Opaque(_ref3) {
  var text = _ref3.text,
      _ref3$type = _ref3.type,
      type = _ref3$type === undefined ? 'button' : _ref3$type,
      onClick = _ref3.onClick;
  return _react2.default.createElement(
    'button',
    {
      type: type,
      className: 'opaque',
      onClick: onClick
    },
    text
  );
};

var Danger = function Danger(_ref4) {
  var text = _ref4.text,
      _ref4$type = _ref4.type,
      type = _ref4$type === undefined ? 'button' : _ref4$type,
      onClick = _ref4.onClick;
  return _react2.default.createElement(
    'button',
    {
      type: type,
      className: 'danger',
      onClick: onClick
    },
    text
  );
};

exports.default = {
  Container: Container,
  Primary: Primary,
  Opaque: Opaque,
  Danger: Danger
};