import { Raw } from 'slate'

const initialEditorState = {
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        { kind: 'text', text: 'Uma linha de texto em um parágrafo.' },
      ]
    }
  ]
}

export default Raw.deserialize(initialEditorState, { terse: true })
