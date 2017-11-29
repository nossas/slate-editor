'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ImageDataModal = require('./ImageDataModal');

var _ImageDataModal2 = _interopRequireDefault(_ImageDataModal);

var _ImageEditLayer = require('./ImageEditLayer');

var _ImageEditLayer2 = _interopRequireDefault(_ImageEditLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageNode.css');

var ImageNode = function (_Component) {
  _inherits(ImageNode, _Component);

  function ImageNode(props) {
    _classCallCheck(this, ImageNode);

    var _this = _possibleConstructorReturn(this, (ImageNode.__proto__ || Object.getPrototypeOf(ImageNode)).call(this, props));

    _this.state = { isModalActive: false };
    return _this;
  }

  _createClass(ImageNode, [{
    key: 'modal',
    value: function modal(isModalActive) {
      this.setState({ isModalActive: isModalActive });
    }
  }, {
    key: 'render',
    value: function render() {
      var isModalActive = this.state.isModalActive;
      var _props = this.props,
          node = _props.node,
          attributes = _props.attributes,
          readOnly = _props.readOnly,
          _props$editor = _props.editor,
          onChange = _props$editor.onChange,
          value = _props$editor.props.value;


      return _react2.default.createElement(
        'span',
        null,
        !isModalActive ? null : _react2.default.createElement(_ImageDataModal2.default, {
          node: node,
          value: value,
          onChange: onChange,
          changeModalState: this.modal.bind(this)
        }),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('image-node--container', { readonly: readOnly }) },
          _react2.default.createElement(_ImageEditLayer2.default, {
            changeModalState: this.modal.bind(this),
            text: 'Editar'
          }),
          _react2.default.createElement('img', _extends({}, attributes, {
            role: 'presentation',
            className: 'image-node',
            src: node.data.get('src'),
            title: node.data.get('title'),
            alt: node.data.get('title')
          }))
        )
      );
    }
  }]);

  return ImageNode;
}(_react.Component);

exports.default = ImageNode;