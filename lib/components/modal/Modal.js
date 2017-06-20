'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./Modal.css');

var Modal = function Modal(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'modal--layer', contentEditable: false },
    _react2.default.createElement(
      'div',
      { className: 'modal--container' },
      children
    )
  );
};

Modal.Header = function (_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === undefined ? 'Editar' : _ref2$title,
      closeButtonAction = _ref2.closeButtonAction;
  return _react2.default.createElement(
    'div',
    { className: 'modal--header' },
    title,
    closeButtonAction && _react2.default.createElement('button', {
      className: 'button--close',
      onClick: closeButtonAction,
      title: 'Fechar'
    })
  );
};

exports.default = Modal;