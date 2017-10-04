export const hasMark = state => state.marks.some(mark => mark.type === 'underline')

export const underlineMarkStrategy = change => change
  .toggleMark('underline')
  .focus()
