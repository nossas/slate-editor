export const hasEmbed = state => state.inlines.some(inline => inline.type === 'embed')

export const appendEmbed = state => {
  const embed = window.prompt('Enter the embed that you want to add.')
  return state
    .transform()
    .insertInline({
      type: 'embed',
      isVoid: true,
      data: { embed }
    })
    .focus()
    .apply()
}
