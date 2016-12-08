export const italicMarkStrategy = state => {
  return state
    .transform()
    .toggleMark('italic')
    .focus()
    .apply()
}
