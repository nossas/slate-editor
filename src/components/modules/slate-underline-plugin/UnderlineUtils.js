export const hasMark = state => state.marks.some(mark => mark.type === 'underline')

export const underlineMarkStrategy = state => {
  return state
    .transform()
    .toggleMark('underline')
    .focus()
    .apply()
}
