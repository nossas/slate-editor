export const hasMark = state => state.marks.some(mark => mark.type === 'underline')

export const underlineMarkStrategy = state => state
  .transform()
  .toggleMark('underline')
  .focus()
  .apply()
