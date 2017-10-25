'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Utils = require('./Utils');

var _initialEditorState = require('./initialEditorState');

var _initialEditorState2 = _interopRequireDefault(_initialEditorState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlateEditor = function (_Component) {
  _inherits(SlateEditor, _Component);

  function SlateEditor(props) {
    _classCallCheck(this, SlateEditor);

    var _this = _possibleConstructorReturn(this, (SlateEditor.__proto__ || Object.getPrototypeOf(SlateEditor)).call(this, props));

    _this.state = {
      state: props.initialState || _initialEditorState2.default,
      readOnly: false,
      uid: new Date().getUTCMilliseconds()
    };
    return _this;
  }

  _createClass(SlateEditor, [{
    key: 'onChange',
    value: function onChange(change) {
      var state = change.state;

      this.setState({ state: state });

      var onChange = this.props.onChange;

      if ((0, _Utils.isFunction)(onChange)) onChange(state);
    }
  }, {
    key: 'changeState',
    value: function changeState(state) {
      var _this2 = this;

      //
      // The `setTimeout` function is need to prevent the warning below:
      //
      // Warning: setState(...): Cannot update during an existing state transition
      // (such as within `render` or another component's constructor). Render methods
      // should be a pure function of props and state; constructor side-effects are
      // an anti-pattern, but can be moved to `componentWillMount`.
      //
      // It needs to check a better way to solve the case to update "outerState"
      // inside the SlateJS node component.
      //
      setTimeout(function () {
        _this2.setState(state);
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          className = _props.className,
          plugins = _props.plugins;


      var childProps = {
        plugins: plugins,
        state: this.state.state,
        outerState: this.state,
        onChange: this.onChange.bind(this),
        changeState: this.changeState.bind(this)
      };

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('editor--root', className), style: style },
        (0, _Utils.cloneElement)(children, childProps)
      );
    }
  }]);

  return SlateEditor;
}(_react.Component);

exports.default = SlateEditor;