'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require('slate');

var initialEditorState = {
  nodes: [{
    kind: 'block',
    type: 'paragraph',
    nodes: [{ kind: 'text', text: 'Uma linha de texto em um parágrafo.' }]
  }]
};

exports.default = _slate.Raw.deserialize(initialEditorState, { terse: true });