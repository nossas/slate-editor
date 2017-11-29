const initialEditorState = {
  document: {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          { kind: 'text', leaves: [{text: 'Uma linha de texto em um parágrafo.'}] },
        ]
      }
    ]
  }
}

export default initialEditorState
