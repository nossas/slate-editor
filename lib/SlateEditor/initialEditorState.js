'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require('slate');

var initialEditorState = {
  document: {
    nodes: [{
      kind: 'block',
      type: 'paragraph',
      nodes: [{ kind: 'text', ranges: [{ text: 'Uma linha de texto em um parágrafo.' }] }]
    }]
  }
};

exports.default = _slate.State.fromJS(initialEditorState);