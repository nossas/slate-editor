'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkUtils = require('./LinkUtils');

var _modal = require('../../components/modal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkDataModal = function (_Component) {
  _inherits(LinkDataModal, _Component);

  function LinkDataModal(props) {
    _classCallCheck(this, LinkDataModal);

    var _this = _possibleConstructorReturn(this, (LinkDataModal.__proto__ || Object.getPrototypeOf(LinkDataModal)).call(this, props));

    var node = _this.props.node;


    _this.state = {
      imageAttributes: {
        title: node.data.get('title'),
        href: node.data.get('href'),
        text: node.data.get('text') || _this.props.presetData.text,
        target: node.data.get('target')
      }
    };
    return _this;
  }

  _createClass(LinkDataModal, [{
    key: 'hasNodeText',
    value: function hasNodeText(props) {
      return props.node.data.get('text');
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props) {
      var hasDiffText = this.props.presetData.text !== props.presetData.text;

      if (!this.hasNodeText(this.props) && hasDiffText) {
        this.setLinkAttribute({ target: { name: 'text' } }, props.presetData.text);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var hasDiffText = this.props.presetData.text !== this.state.imageAttributes.text;

      // update the text input value according to text that
      // have modified inline outside of the modal.
      if (this.hasNodeText(this.props) && hasDiffText) {
        this.setLinkAttribute({ target: { name: 'text' } }, this.props.presetData.text);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.inputHref.focus();
    }
  }, {
    key: 'setLinkAttribute',
    value: function setLinkAttribute(event, value) {
      this.setState({
        imageAttributes: _extends({}, this.state.imageAttributes, _defineProperty({}, event.target.name, value))
      });
    }
  }, {
    key: 'isValidHref',
    value: function isValidHref(href) {
      // allow http://, https:// (secure) and non-protocol (default http://)
      // eslint-disable-next-line
      return (/^(https?:\/\/)?[\w]{2,}\.[\w\.]{2,}$/.test(href)
      );
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
            if (!node.data.get('href')) onChange((0, _LinkUtils.unlink)(value.change()));
            changeModalState(false);
          }
        }),
        _react2.default.createElement(
          _modal.ModalContent,
          null,
          _react2.default.createElement(
            _modal.ModalContent.Right,
            null,
            _react2.default.createElement(
              _modal.ModalForm,
              { onSubmit: function onSubmit(e) {
                  e.preventDefault();

                  var imageAttributes = _this2.state.imageAttributes;


                  if (!imageAttributes.href) {
                    onChange((0, _LinkUtils.unlink)(value.change()));
                  } else {
                    onChange((0, _LinkUtils.updateLinkStrategy)({ change: value.change(), data: imageAttributes }));
                  }

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
                  'Esta mensagem aparecer\xE1 quando o cursor do mouse estiver posicionado sobre o link.'
                ),
                _react2.default.createElement('input', {
                  id: 'image-plugin--edit-title',
                  type: 'text',
                  name: 'title',
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  onChange: function onChange(e) {
                    return _this2.setLinkAttribute(e, e.target.value);
                  },
                  value: this.state.imageAttributes.title || '',
                  placeholder: 'Insira uma descri\xE7\xE3o para o link'
                })
              ),
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-href' },
                  'URL'
                ),
                _react2.default.createElement('input', {
                  id: 'image-plugin--edit-href',
                  type: 'text',
                  name: 'href',
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  onChange: function onChange(e) {
                    return _this2.setLinkAttribute(e, e.target.value);
                  },
                  value: this.state.imageAttributes.href || '',
                  placeholder: 'Ex: http://dominio.com',
                  ref: function ref(input) {
                    return _this2.inputHref = input;
                  }
                })
              ),
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-text' },
                  'Texto'
                ),
                _react2.default.createElement('input', {
                  id: 'image-plugin--edit-text',
                  type: 'text',
                  name: 'text',
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  onChange: function onChange(e) {
                    return _this2.setLinkAttribute(e, e.target.value);
                  },
                  value: this.state.imageAttributes.text || ''
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
                    name: 'target',
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                    onChange: function onChange(e) {
                      return _this2.setLinkAttribute(e, e.target.checked ? '_blank' : '_self');
                    },
                    checked: this.state.imageAttributes.target === '_blank'
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
                    if (!node.data.get('href')) onChange((0, _LinkUtils.unlink)(value.change()));
                    changeModalState(false);
                  }
                }),
                _react2.default.createElement(_modal.ModalButton.Danger, {
                  text: 'Remover',
                  onClick: function onClick(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    onChange((0, _LinkUtils.unlink)(value.change()));
                    changeModalState(false);
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return LinkDataModal;
}(_react.Component);

exports.default = LinkDataModal;