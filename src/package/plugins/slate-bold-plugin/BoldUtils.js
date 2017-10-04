export const hasMark = state => state.marks.some(mark => mark.type === 'bold')

export const boldMarkStrategy = change => change
  .toggleMark('bold')
  .focus()