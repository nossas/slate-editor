export const hasMark = state => state.marks.some(mark => mark.type === 'bold')

export const boldMarkStrategy = state => state
  .transform()
  .toggleMark('bold')
  .focus()
  .apply()
