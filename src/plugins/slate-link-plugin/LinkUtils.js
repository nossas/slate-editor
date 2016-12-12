export const httpPreffixStrategy = href => href.search('https?://') >= 0 ? href : `http://${href}`

export const hasLinks = state => state.inlines.some(inline => inline.type === 'link')

export const insertLinkStrategy = state => {
  if (hasLinks(state)) {
    return state
      .transform()
      .unwrapInline('link')
      .apply()
  } else if (state.isExpanded) {
    const href = httpPreffixStrategy(window.prompt('Enter the URL of the link:'))
    const title = window.prompt('Enter the title of the link:')
    const target = window.confirm('Do you want to open it into a new tab?:') ? '_blank' : '_top'
    const newState = state
      .transform()
      .wrapInline({
        type: 'link',
        data: { href, title, target }
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
