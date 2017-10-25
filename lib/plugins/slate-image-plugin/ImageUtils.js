'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var insertInlineImage = exports.insertInlineImage = function insertInlineImage(_ref) {
  var change = _ref.change,
      src = _ref.src;

  return change.insertInline({
    type: 'image',
    isVoid: true,
    data: { src: src }
  });
};

var updateInlineImage = exports.updateInlineImage = function updateInlineImage(_ref2) {
  var change = _ref2.change,
      _ref2$data = _ref2.data,
      src = _ref2$data.src,
      title = _ref2$data.title,
      href = _ref2$data.href,
      openExternal = _ref2$data.openExternal;

  return href ? change.setInline({
    type: 'imageLink',
    isVoid: true,
    data: { src: src, title: title, href: href, openExternal: openExternal }
  }) : change.setInline({
    type: 'image',
    isVoid: true,
    data: { src: src, title: title, openExternal: openExternal }
  });
};

var deleteInlineImage = exports.deleteInlineImage = function deleteInlineImage(_ref3) {
  var change = _ref3.change;

  return change.deleteBackward(1);
};

var forceClickUploadButton = exports.forceClickUploadButton = function forceClickUploadButton(editor) {
  window.document.getElementById('slate-image-plugin-button-' + editor.props.outerState.uid).click();
};