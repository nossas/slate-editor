'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  var state = _ref.state,
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
            state: (0, _ColorUtils.colorMarkStrategy)({ state: state, rgba: rgbaChange }).state,
            color: { rgba: rgbaChange, showPicker: showPicker }
          });
        }
      })
    )
  );
};

DraggableColorPicker.propTypes = {
  state: _react.PropTypes.object.isRequired,
  changeState: _react.PropTypes.func.isRequired,
  outerState: _react.PropTypes.shape({
    color: _react.PropTypes.shape({
      showPicker: _react.PropTypes.bool.isRequired,
      rgba: _react.PropTypes.shape({
        r: _react.PropTypes.number.isRequired,
        g: _react.PropTypes.number.isRequired,
        b: _react.PropTypes.number.isRequired,
        a: _react.PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

exports.default = DraggableColorPicker;