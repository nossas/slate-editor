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

var updateInlineImage = exports.updateInlineImage = function updateInlineImage(_ref2) {
  var state = _ref2.state,
      _ref2$data = _ref2.data,
      src = _ref2$data.src,
      title = _ref2$data.title,
      href = _ref2$data.href,
      openExternal = _ref2$data.openExternal;

  return href ? state.transform().setInline({
    type: 'imageLink',
    isVoid: true,
    data: { src: src, title: title, href: href, openExternal: openExternal }
  }).apply() : state.transform().setInline({
    type: 'image',
    isVoid: true,
    data: { src: src, title: title, openExternal: openExternal }
  }).apply();
};

var deleteInlineImage = exports.deleteInlineImage = function deleteInlineImage(_ref3) {
  var state = _ref3.state;

  return state.transform().deleteBackward(1).apply();
};

var forceClickUploadButton = exports.forceClickUploadButton = function forceClickUploadButton(editor) {
  window.document.getElementById('slate-image-plugin-button-' + editor.props.outerState.uid).click();
};