export const hasLinks = state => state.inlines.some(inline => inline.type === 'link')

export const insertLinkStrategy = state => {
  if (hasLinks(state)) {
    return state
      .transform()
      .unwrapInline('link')
      .apply()
  } else if (state.isExpanded) {
    const href = window.prompt('Enter the URL of the link:')
    const newState = state
      .transform()
      .wrapInline({
        type: 'link',
        data: { href }
      })
      .collapseToEnd()
      .apply()
    return newState
  } else {
    const href = window.prompt('Enter the URL of the link:')
    const text = window.prompt('Enter the text for the link:')
    return state
      .transform()
      .insertText(text)
      .extendBackward(text.length)
      .wrapInline({
        type: 'link',
        data: { href }
      })
      .collapseToEnd()
      .apply()
  }
}
