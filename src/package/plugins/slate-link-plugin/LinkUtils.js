export const httpPreffixStrategy = href => href.search('https?://') >= 0 ? href : `http://${href}`

export const hasLinks = state => state.inlines.some(inline => inline.type === 'link')

export const createLink = data => ({ type: 'link', data })

export const insertLinkStrategy = state => {
  let transform = state.transform()

  if (hasLinks(state)) {
    transform.unwrapInline('link')
  }

  else if (state.isExpanded) {
    const href = httpPreffixStrategy(window.prompt('Enter the URL of the link:'))
    const title = window.prompt('Enter the title of the link:')
    const target = window.confirm('Do you want to open it into a new tab?:') ? '_blank' : '_top'

    transform
      .wrapInline(createLink({ href, title, target }))
      .collapseToEnd()
  }

  else {
    const href = httpPreffixStrategy(window.prompt('Enter the URL of the link:'))
    const text = window.prompt('Enter the text for the link:')
    const title = window.prompt('Enter the title of the link:')
    const target = window.confirm('Do you want to open it into a new tab?:') ? '_blank' : '_top'
    transform
      .insertText(text)
      .extendBackward(text.length)
      .wrapInline(createLink({ href, title, target }))
      .collapseToEnd()
  }

  return transform.focus().apply()
}
