'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SlateEditor = require('../SlateEditor');

var _SlateEditor2 = _interopRequireDefault(_SlateEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SlateEditor', function () {
  it('renders without crashing', function () {
    (0, _enzyme.mount)(_react2.default.createElement(_SlateEditor2.default, null));
  });
});