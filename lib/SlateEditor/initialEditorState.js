'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require('slate');

var initialEditorState = {
  nodes: [{
    kind: 'block',
    type: 'paragraph',
    nodes: [{ kind: 'text', text: 'A line of text in a paragraph.' }]
  }]
};

exports.default = _slate.Raw.deserialize(initialEditorState, { terse: true });