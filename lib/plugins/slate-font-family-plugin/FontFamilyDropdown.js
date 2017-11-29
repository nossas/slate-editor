'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FontFamilyList = require('./FontFamilyList');

var _FontFamilyList2 = _interopRequireDefault(_FontFamilyList);

var _FontFamilyUtils = require('./FontFamilyUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontFamilyDropdown = function FontFamilyDropdown(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      changeState = _ref.changeState,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'select',
    {
      className: (0, _classnames2.default)(className),
      style: style,
      onChange: function onChange(_ref2) {
        var fontFamilyIndex = _ref2.target.value;

        _onChange((0, _FontFamilyUtils.fontFamilyMarkStrategy)({ value: value, fontFamilyIndex: fontFamilyIndex }));
      }
    },
    _FontFamilyList2.default.map(function (font, index) {
      return _react2.default.createElement(
        'option',
        { key: 'slate-font-family-' + index, value: index },
        font.name
      );
    })
  );
};

exports.default = FontFamilyDropdown;