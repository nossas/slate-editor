'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _slate = require('slate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      style = _ref.style,
      state = _ref.state,
      outerState = _ref.outerState,
      plugins = _ref.plugins,
      onChange = _ref.onChange,
      changeState = _ref.changeState,
      children = _ref.children;
  var readOnly = outerState.readOnly;


  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('editor--content', className), style: wrapperStyle },
    _react2.default.createElement(_slate.Editor, {
      plugins: plugins,
      state: state,
      onChange: onChange,
      readOnly: readOnly,
      changeState: changeState,
      outerState: outerState,
      style: style
    }),
    children
  );
};