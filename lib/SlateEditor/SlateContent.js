'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _slateReact = require('slate-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      style = _ref.style,
      state = _ref.state,
      outerState = _ref.outerState,
      plugins = _ref.plugins,
      onChange = _ref.onChange,
      changeState = _ref.changeState,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'wrapperStyle', 'style', 'state', 'outerState', 'plugins', 'onChange', 'changeState', 'children']);

  var readOnly = outerState.readOnly;


  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('editor--content', className), style: wrapperStyle },
    _react2.default.createElement(_slateReact.Editor, _extends({
      plugins: plugins,
      state: state,
      onChange: onChange,
      readOnly: readOnly,
      changeState: changeState,
      outerState: outerState,
      style: style
    }, rest)),
    children
  );
};