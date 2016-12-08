export const boldMarkStrategy = state => {
  return state
    .transform()
    .toggleMark('bold')
    .focus()
    .apply()
}
