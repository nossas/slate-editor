export const strikethroughMarkStrategy = state => {
  return state
    .transform()
    .toggleMark('strikethrough')
    .focus()
    .apply()
}
