'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactS3Uploader = require('react-s3-uploader');

var _reactS3Uploader2 = _interopRequireDefault(_reactS3Uploader);

var _button = require('../../components/button');

var _ImageUtils = require('./ImageUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageButton = function (_Component) {
  _inherits(ImageButton, _Component);

  function ImageButton(props) {
    _classCallCheck(this, ImageButton);

    var _this = _possibleConstructorReturn(this, (ImageButton.__proto__ || Object.getPrototypeOf(ImageButton)).call(this, props));

    _this.state = {
      progress: 0
    };
    return _this;
  }

  _createClass(ImageButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          className = _props.className,
          style = _props.style,
          signingUrl = _props.signingUrl,
          outerState = _props.outerState,
          type = _props.type;

      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block' } },
        _react2.default.createElement(
          _button.Button,
          {
            id: 'slate-image-plugin-button-' + outerState.uid,
            type: type,
            style: _extends({ position: 'relative' }, style),
            className: className,
            onClick: function onClick(e) {
              var upload = _reactDom2.default.findDOMNode(_this2.upload);
              upload.value = '';
              upload.click();
            }
          },
          _react2.default.createElement('div', { style: {
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: this.state.progress + '%',
              opacity: 0.4,
              backgroundColor: !this.state.error ? '#000' : '#92063E'
            } }),
          _react2.default.createElement(_reactFontawesome2.default, { name: 'image' })
        ),
        _react2.default.createElement(_reactS3Uploader2.default, {
          signingUrl: signingUrl,
          accept: 'image/*',
          onProgress: function onProgress(progress) {
            _this2.setState({ progress: progress });
          },
          onError: function onError(e) {
            return console.error('[SlateEditor][ImagePlugin]:', e);
          },
          onFinish: function onFinish(e) {
            var src = e.signedUrl.substring(0, e.signedUrl.indexOf('?'));
            onChange((0, _ImageUtils.insertInlineImage)({ change: value.change(), src: src }));
            _this2.setState({ progress: 0 });
          },
          ref: function ref(input) {
            _this2.upload = input;
          },
          style: { position: 'absolute', visibility: 'hidden' }
        })
      );
    }
  }]);

  return ImageButton;
}(_react.Component);

exports.default = ImageButton;