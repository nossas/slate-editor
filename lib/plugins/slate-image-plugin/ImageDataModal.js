'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageUtils = require('./ImageUtils');

var _modal = require('../../components/modal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageDataModal = function (_Component) {
  _inherits(ImageDataModal, _Component);

  function ImageDataModal(props) {
    _classCallCheck(this, ImageDataModal);

    var _this = _possibleConstructorReturn(this, (ImageDataModal.__proto__ || Object.getPrototypeOf(ImageDataModal)).call(this, props));

    var node = _this.props.node;


    _this.state = {
      imageAttributes: {
        src: node.data.get('src'),
        title: node.data.get('title'),
        href: node.data.get('href'),
        openExternal: node.data.get('openExternal')
      }
    };
    return _this;
  }

  _createClass(ImageDataModal, [{
    key: 'setImageAttribute',
    value: function setImageAttribute(event, value) {
      this.setState({
        imageAttributes: _extends({}, this.state.imageAttributes, _defineProperty({}, event.target.name, value))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          node = _props.node,
          value = _props.value,
          onChange = _props.onChange,
          changeModalState = _props.changeModalState;


      return _react2.default.createElement(
        _modal.Modal,
        null,
        _react2.default.createElement(_modal.Modal.Header, {
          closeButtonAction: function closeButtonAction() {
            return changeModalState(false);
          }
        }),
        _react2.default.createElement(
          _modal.ModalContent,
          null,
          _react2.default.createElement(
            _modal.ModalContent.Left,
            null,
            _react2.default.createElement('img', { src: node.data.get('src'), alt: node.data.get('title'), role: 'presentation' })
          ),
          _react2.default.createElement(
            _modal.ModalContent.Right,
            null,
            _react2.default.createElement(
              _modal.ModalForm,
              { onSubmit: function onSubmit(e) {
                  e.preventDefault();
                  onChange((0, _ImageUtils.updateInlineImage)({ change: value.change(), data: _this2.state.imageAttributes }));
                  changeModalState(false);
                } },
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-title' },
                  'T\xEDtulo'
                ),
                _react2.default.createElement(
                  _modal.ModalForm.LabelHelper,
                  null,
                  'Esta mensagem aparecer\xE1 quando o cursor do mouse estiver posicionado sobre a imagem.'
                ),
                _react2.default.createElement('input', {
                  id: 'image-plugin--edit-title',
                  type: 'text',
                  name: 'title',
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  onChange: function onChange(e) {
                    return _this2.setImageAttribute(e, e.target.value);
                  },
                  value: this.state.imageAttributes.title || '',
                  placeholder: 'Insira uma descri\xE7\xE3o para a imagem'
                })
              ),
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-href' },
                  'Link'
                ),
                _react2.default.createElement('input', {
                  id: 'image-plugin--edit-href',
                  type: 'text',
                  name: 'href',
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  onChange: function onChange(e) {
                    return _this2.setImageAttribute(e, e.target.value);
                  },
                  value: this.state.imageAttributes.href || '',
                  placeholder: 'Ex: http://dominio.com'
                })
              ),
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-open-external' },
                  _react2.default.createElement('input', {
                    id: 'image-plugin--edit-open-external',
                    type: 'checkbox',
                    name: 'openExternal',
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                    onChange: function onChange(e) {
                      return _this2.setImageAttribute(e, e.target.checked);
                    },
                    checked: !!this.state.imageAttributes.openExternal
                  }),
                  'Abrir em nova aba'
                )
              ),
              _react2.default.createElement(
                _modal.ModalButton.Container,
                null,
                _react2.default.createElement(_modal.ModalButton.Primary, {
                  type: 'submit',
                  text: 'Salvar'
                }),
                _react2.default.createElement(_modal.ModalButton.Opaque, {
                  text: 'Cancelar',
                  onClick: function onClick() {
                    return changeModalState(false);
                  }
                }),
                _react2.default.createElement(_modal.ModalButton.Danger, {
                  text: 'Deletar',
                  onClick: function onClick(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    onChange((0, _ImageUtils.deleteInlineImage)({ change: value.change() }));
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return ImageDataModal;
}(_react.Component);

exports.default = ImageDataModal;