'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FontFamilyList = require('./FontFamilyList');

var _FontFamilyList2 = _interopRequireDefault(_FontFamilyList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontFamilyMark = function FontFamilyMark(_ref) {
  var children = _ref.children,
      data = _ref.mark.data;
  return _react2.default.createElement(
    'span',
    { style: { fontFamily: _FontFamilyList2.default[data.get('fontFamilyIndex')].name } },
    children
  );
};

exports.default = FontFamilyMark;