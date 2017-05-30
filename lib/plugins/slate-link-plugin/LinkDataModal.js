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
        url: node.data.get('url'),
        text: node.data.get('text') || _this.props.presetData.text,
        openExternal: node.data.get('openExternal')
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
    key: 'setLinkAttribute',
    value: function setLinkAttribute(event, value) {
      this.setState({
        imageAttributes: _extends({}, this.state.imageAttributes, _defineProperty({}, event.target.name, value))
      });
    }
  }, {
    key: 'isValidURL',
    value: function isValidURL(url) {
      return (/^https?:\/\/[\w]{2,}\.[\w\.]{2,}$/.test(url)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          state = _props.state,
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
            _modal.ModalContent.Right,
            null,
            _react2.default.createElement(
              _modal.ModalForm,
              { onSubmit: function onSubmit(e) {
                  e.preventDefault();

                  var imageAttributes = _this2.state.imageAttributes;


                  if (_this2.isValidURL(imageAttributes.url)) {
                    onChange((0, _LinkUtils.updateLinkStrategy)({ state: state, data: _this2.state.imageAttributes }));
                    changeModalState(false);
                  }
                } },
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-title' },
                  'Title'
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
                  value: this.state.imageAttributes.title
                })
              ),
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-url' },
                  'URL'
                ),
                _react2.default.createElement('input', {
                  id: 'image-plugin--edit-url',
                  type: 'text',
                  name: 'url',
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  },
                  onChange: function onChange(e) {
                    return _this2.setLinkAttribute(e, e.target.value);
                  },
                  value: this.state.imageAttributes.url
                })
              ),
              _react2.default.createElement(
                _modal.ModalForm.Group,
                null,
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'image-plugin--edit-text' },
                  'Text'
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
                  value: this.state.imageAttributes.text
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
                      return _this2.setLinkAttribute(e, e.target.checked);
                    },
                    checked: this.state.imageAttributes.openExternal
                  }),
                  'Open link in new tab'
                )
              ),
              _react2.default.createElement(
                _modal.ModalButton.Container,
                null,
                _react2.default.createElement(_modal.ModalButton.Primary, {
                  type: 'submit',
                  text: 'Save'
                }),
                _react2.default.createElement(_modal.ModalButton.Opaque, {
                  text: 'Cancel',
                  onClick: function onClick() {
                    return changeModalState(false);
                  }
                }),
                _react2.default.createElement(_modal.ModalButton.Danger, {
                  text: 'Unlink',
                  onClick: function onClick(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    onChange((0, _LinkUtils.unlink)(state));
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