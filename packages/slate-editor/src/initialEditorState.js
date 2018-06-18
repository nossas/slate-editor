const initialEditorState = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          { object: 'text', leaves: [{text: 'Uma linha de texto em um parágrafo.'}] },
        ]
      }
    ]
  }
}

export default initialEditorState
