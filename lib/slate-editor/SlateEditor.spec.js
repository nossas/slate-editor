'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SlateEditor = require('./SlateEditor');

var _SlateEditor2 = _interopRequireDefault(_SlateEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('package/slate-editor/SlateEditor.spec.js', function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SlateEditor2.default, null));

  it('renders without crashing', function () {
    expect(wrapper.find('.editor--root').length).toBe(1);
  });
});