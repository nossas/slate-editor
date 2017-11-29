'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkUtils = require('./LinkUtils');

var _tooltip = require('../../components/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _LinkDataModal = require('./LinkDataModal');

var _LinkDataModal2 = _interopRequireDefault(_LinkDataModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./LinkNode.css');

var LinkNode = function (_Component) {
  _inherits(LinkNode, _Component);

  function LinkNode(props) {
    _classCallCheck(this, LinkNode);

    var _this = _possibleConstructorReturn(this, (LinkNode.__proto__ || Object.getPrototypeOf(LinkNode)).call(this, props));

    _this.state = {
      isModalActive: false,
      mounted: false,
      presetData: { text: '' }
    };
    return _this;
  }

  _createClass(LinkNode, [{
    key: 'modal',
    value: function modal(isModalActive) {
      this.setState({ isModalActive: isModalActive });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var node = this.props.node;


      if (node.data.get('openModal')) this.modal(true);

      this.setState({
        presetData: { text: this.text.innerText },
        mounted: true
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props, state) {
      if (state.mounted && state.presetData.text !== this.text.innerText) {
        this.setState({
          presetData: { text: this.text.innerText }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isModalActive = _state.isModalActive,
          presetData = _state.presetData;
      var _props = this.props,
          children = _props.children,
          attributes = _props.attributes,
          node = _props.node,
          readOnly = _props.readOnly,
          _props$editor = _props.editor,
          onChange = _props$editor.onChange,
          value = _props$editor.props.value;


      var focusedOnCurrentNode = (0, _LinkUtils.getLink)(value) && node.key === (0, _LinkUtils.getLink)(value).key;
      var showTooltip = !readOnly && value.isCollapsed && focusedOnCurrentNode;

      return _react2.default.createElement(
        'span',
        null,
        !isModalActive ? null : _react2.default.createElement(_LinkDataModal2.default, {
          node: node,
          value: value,
          onChange: onChange,
          changeModalState: this.modal.bind(this),
          presetData: presetData
        }),
        _react2.default.createElement(
          'span',
          { className: 'link-node-container' },
          showTooltip && _react2.default.createElement(
            _tooltip2.default,
            { style: { display: (0, _LinkUtils.hasLinks)(value) ? 'block' : 'none' } },
            _react2.default.createElement(
              _tooltip2.default.Item,
              null,
              _react2.default.createElement(
                'a',
                { href: node.data.get('href'), target: '_blank' },
                node.data.get('href')
              )
            ),
            _react2.default.createElement(
              _tooltip2.default.Item,
              { onClick: function onClick() {
                  return _this2.modal(true);
                } },
              'Editar'
            ),
            _react2.default.createElement(
              _tooltip2.default.Item,
              { onClick: function onClick() {
                  return onChange((0, _LinkUtils.unlink)(value.change()));
                } },
              'Remover'
            )
          ),
          _react2.default.createElement(
            'a',
            _extends({}, attributes, {
              className: 'link-node',
              href: node.data.get('href'),
              target: node.data.get('target'),
              title: node.data.get('title'),
              ref: function ref(text) {
                _this2.text = text;
              }
            }),
            children
          )
        )
      );
    }
  }]);

  return LinkNode;
}(_react.Component);

exports.default = LinkNode;