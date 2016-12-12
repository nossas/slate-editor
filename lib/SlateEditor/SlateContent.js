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

exports.default = function (props) {
  var className = props.className,
      state = props.state,
      outerState = props.outerState,
      plugins = props.plugins,
      onChange = props.onChange,
      changeState = props.changeState;
  var readOnly = outerState.readOnly;


  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)("editor--content", className) },
    _react2.default.createElement(_slate.Editor, {
      plugins: plugins,
      state: state,
      onChange: onChange,
      readOnly: readOnly,
      changeState: changeState,
      outerState: outerState
    })
  );
};