export const underlineMarkStrategy = state => {
  return state
    .transform()
    .toggleMark('underline')
    .focus()
    .apply()
}
