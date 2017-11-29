'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slate = require('slate');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react3 = require('../utils/react');

var _typeCheck = require('../utils/type-check');

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
      value: _this.migrateStateVersion(props.initialState || _initialEditorState2.default),
      readOnly: false,
      uid: new Date().getUTCMilliseconds()
    };
    return _this;
  }

  //
  // Migrate Slate's Value object
  // From v0.25.3
  // To   v0.31.3
  //


  _createClass(SlateEditor, [{
    key: 'migrateStateVersion',
    value: function migrateStateVersion(value) {
      var updatedValue = value;

      if (value.kind !== 'value') {
        updatedValue = JSON.parse(JSON.stringify(value).replace(/"kind":"state"/g, '"kind":"value"').replace(/"ranges":\[/g, '"leaves":[').replace(/"kind":"range"/g, '"kind":"leaf"'));
      }

      return _slate.Value.fromJSON(updatedValue);
    }

    //
    // This function change only the Editor value object
    //

  }, {
    key: 'onChange',
    value: function onChange(change) {
      var value = change.value;

      this.setState({ value: value });

      var onChange = this.props.onChange;

      if ((0, _typeCheck.isFunction)(onChange)) onChange(value);
    }

    //
    // This function change the SlateEditor state object.
    // It can be change the Editor value object too...
    //

  }, {
    key: 'changeState',
    value: function changeState(state) {
      this.setState(state);
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
        value: this.state.value,
        outerState: this.state,
        onChange: this.onChange.bind(this),
        changeState: this.changeState.bind(this)
      };

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('editor--root', className), style: style },
        (0, _react3.cloneElement)(children, childProps)
      );
    }
  }]);

  return SlateEditor;
}(_react.Component);

SlateEditor.propTypes = {
  initialState: _propTypes.PropTypes.object
};

exports.default = SlateEditor;