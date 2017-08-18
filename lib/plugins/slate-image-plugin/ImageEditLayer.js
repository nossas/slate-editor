'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../../components/button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageEditLayer.css');

var ImageEditLayer = function ImageEditLayer(_ref) {
  var changeModalState = _ref.changeModalState,
      text = _ref.text;
  return _react2.default.createElement(
    'div',
    { className: 'image-node--image-edit-layer', onClick: function onClick() {
        return changeModalState(true);
      } },
    _react2.default.createElement(
      _button.Button,
      { className: 'image-node--image-edit-button', onClick: function onClick() {
          return changeModalState(true);
        } },
      text
    )
  );
};

exports.default = ImageEditLayer;