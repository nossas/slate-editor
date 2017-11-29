'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../../components/button');

var _DraggableColorPicker = require('./DraggableColorPicker');

var _DraggableColorPicker2 = _interopRequireDefault(_DraggableColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ColorButton.css');

var ColorButton = function (_Component) {
  _inherits(ColorButton, _Component);

  function ColorButton() {
    _classCallCheck(this, ColorButton);

    return _possibleConstructorReturn(this, (ColorButton.__proto__ || Object.getPrototypeOf(ColorButton)).apply(this, arguments));
  }

  _createClass(ColorButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          changeState = _props.changeState,
          color = _props.outerState.color,
          initialState = _props.initialState;

      // Set initial state received as a prop

      if (!color) changeState({ color: initialState });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          style = _props2.style,
          value = _props2.value,
          changeState = _props2.changeState,
          color = _props2.outerState.color,
          type = _props2.type;

      // If still does not have the initial state, do not render button.

      if (!color) return null;

      var showPicker = color.showPicker;


      return _react2.default.createElement(
        'div',
        { className: 'slate-color-plugin--toolbar' },
        _react2.default.createElement(
          _button.Button,
          {
            style: style,
            type: type,
            onClick: function onClick(e) {
              return changeState({ value: value, color: _extends({}, color, { showPicker: !showPicker }) });
            },
            className: (0, _classnames2.default)('slate-color-plugin--button', className, { active: showPicker })
          },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'eyedropper' })
        ),
        showPicker && _react2.default.createElement(_DraggableColorPicker2.default, this.props)
      );
    }
  }]);

  return ColorButton;
}(_react.Component);

exports.default = ColorButton;