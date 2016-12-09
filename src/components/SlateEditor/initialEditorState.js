import { Raw } from 'slate'

const initialEditorState = {
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        { kind: 'text', text: 'A line of text in a paragraph.' },
      ]
    }
  ]
}

export default Raw.deserialize(initialEditorState, { terse: true })
