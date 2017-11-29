'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _reactColor = require('react-color');

var _ColorUtils = require('./ColorUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./DraggableColorPicker.css');

var DraggableColorPicker = function DraggableColorPicker(_ref) {
  var value = _ref.value,
      changeState = _ref.changeState,
      _ref$outerState$color = _ref.outerState.color,
      rgba = _ref$outerState$color.rgba,
      showPicker = _ref$outerState$color.showPicker,
      pickerDefaultPosition = _ref.pickerDefaultPosition;
  return _react2.default.createElement(
    _reactDraggable2.default,
    {
      handle: '.slate-color-plugin--draggable-handle',
      defaultPosition: pickerDefaultPosition,
      zIndex: 100
    },
    _react2.default.createElement(
      'div',
      { className: 'slate-color-plugin--draggable-handle-container' },
      _react2.default.createElement('div', { className: 'slate-color-plugin--draggable-handle' }),
      _react2.default.createElement(_reactColor.SketchPicker, {
        color: rgba,
        onChangeComplete: function onChangeComplete(color) {
          var rgbaChange = color.rgb;
          changeState({
            value: (0, _ColorUtils.colorMarkStrategy)({ value: value, rgba: rgbaChange }).value,
            color: { rgba: rgbaChange, showPicker: showPicker }
          });
        }
      })
    )
  );
};

DraggableColorPicker.propTypes = {
  value: _propTypes2.default.object.isRequired,
  changeState: _propTypes2.default.func.isRequired,
  outerState: _propTypes2.default.shape({
    color: _propTypes2.default.shape({
      showPicker: _propTypes2.default.bool.isRequired,
      rgba: _propTypes2.default.shape({
        r: _propTypes2.default.number.isRequired,
        g: _propTypes2.default.number.isRequired,
        b: _propTypes2.default.number.isRequired,
        a: _propTypes2.default.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

exports.default = DraggableColorPicker;