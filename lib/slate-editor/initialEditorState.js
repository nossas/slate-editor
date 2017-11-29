'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialEditorState = {
  document: {
    nodes: [{
      kind: 'block',
      type: 'paragraph',
      nodes: [{ kind: 'text', leaves: [{ text: 'Uma linha de texto em um parágrafo.' }] }]
    }]
  }
};

exports.default = initialEditorState;