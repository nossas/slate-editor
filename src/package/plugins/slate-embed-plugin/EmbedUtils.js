export const hasEmbed = value => value.inlines.some(inline => inline.type === 'embed')

export const appendEmbed = change => {
  const embed = window.prompt('Enter the embed that you want to add.')
  return change
    .insertInline({
      type: 'embed',
      isVoid: true,
      data: { embed }
    })
    .focus()
}
