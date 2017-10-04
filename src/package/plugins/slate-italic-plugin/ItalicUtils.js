export const hasMark = state => state.marks.some(mark => mark.type === 'italic')

export const italicMarkStrategy = change => change
  .toggleMark('italic')
  .focus()
