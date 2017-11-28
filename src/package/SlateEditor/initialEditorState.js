import { Value } from 'slate'

const initialEditorState = {
  document: {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          { kind: 'text', ranges: [{text: 'Uma linha de texto em um parágrafo.'}] },
        ]
      }
    ]
  }
}

export default Value.fromJSON(initialEditorState)
