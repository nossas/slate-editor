export const httpPreffixStrategy = href => href.search('https?://') >= 0 ? href : `http://${href}`
export const hasLinks = state => state.inlines.some(inline => inline.type === 'link')
export const getLink = state => state.inlines.filter(inline => inline.type === 'link').first()
export const createLink = data => ({ type: 'link', data })
export const hasMultiBlocks = state => state.blocks.size > 1

export const unlink = state =>
  state
    .transform()
    .unwrapInline('link')
    .focus()
    .apply()

export const updateLinkStrategy = ({ state, data: { title, href, text, target } }) => {
  let transform = state.transform()

  if (state.isCollapsed) {
    transform
      .moveOffsetsTo(0, state.anchorText.characters.size)
  }

  transform
    .insertText(text)
    .extend(text.length * -1)
    .setInline({
      type: 'link',
      data: {
        title,
        href,
        text,
        target: target ? '_blank' : '_self'
      }
    })

  return transform.apply()
}

export const insertLinkStrategy = state => {
  let transform = state.transform()

  if (hasLinks(state)) {
    transform.unwrapInline('link')
  }
  else if (state.isExpanded && !hasMultiBlocks(state)) {
    const startOffset = state.selection.startOffset

    // fix offset 0 selection:
    // add a single white space and select forward white space
    if (startOffset === 0) {
      transform
        .insertText(` ${state.anchorText.text}`)
        .moveOffsetsTo(1, state.anchorText.characters.size + 1)
    }

    transform
      .wrapInline(createLink({ target: '_blank', openModal: true }))

    // fix offset 0 selection:
    // remove the white space added before
    if (startOffset === 0) {
      transform
        .moveOffsetsTo(0, 0)
        .deleteBackward()
    }
  }
  else if (hasMultiBlocks(state)) {
    console.info('[SlateJS][LinkPlugin] has multiple blocks on selection')
  }
  else if (state.isCollapsed && !hasLinks(state)) {
    console.info('[SlateJS][LinkPlugin] selection collapsed, w/o links on selection')
  }

  return transform.apply()
}
