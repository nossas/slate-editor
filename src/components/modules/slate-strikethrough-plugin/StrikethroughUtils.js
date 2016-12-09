export const hasMark = state => state.marks.some(mark => mark.type === 'strikethrough')

export const strikethroughMarkStrategy = state => {
  return state
    .transform()
    .toggleMark('strikethrough')
    .focus()
    .apply()
}
