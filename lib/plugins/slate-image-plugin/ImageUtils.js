'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var insertInlineImage = exports.insertInlineImage = function insertInlineImage(_ref) {
  var state = _ref.state,
      src = _ref.src;

  return state.transform().insertInline({
    type: 'image',
    isVoid: true,
    data: { src: src }
  }).apply();
};

var forceClickUploadButton = exports.forceClickUploadButton = function forceClickUploadButton(editor) {
  window.document.getElementById('slate-image-plugin-button-' + editor.props.outerState.uid).click();
};