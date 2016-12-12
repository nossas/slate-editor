export const hasMark = state => state.marks.some(mark => mark.type === 'italic')

export const italicMarkStrategy = state => state
  .transform()
  .toggleMark('italic')
  .focus()
  .apply()
