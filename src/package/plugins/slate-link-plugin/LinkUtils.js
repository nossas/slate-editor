export const httpPreffixStrategy = href => href.search('https?://') >= 0 ? href : `http://${href}`
export const hasLinks = value => value.inlines.some(inline => inline.type === 'link')
export const getLink = value => value.inlines.filter(inline => inline.type === 'link').first()
export const createLink = data => ({ type: 'link', data })
export const hasMultiBlocks = value => value.blocks.size > 1

export const unlink = change => change
  .unwrapInline('link')
  .focus()

export const updateLinkStrategy = ({ change, data: { title, href, text, target } }) => {
  const { value } = change

  if (value.isCollapsed) {
    change
      .moveOffsetsTo(0, value.anchorText.characters.size)
  }

  change
    .insertText(text)
    .setInline({
      type: 'link',
      data: { title, href, text, target }
    })

  return change
}

export const insertLinkStrategy = change => {
  const { value } = change

  if (hasLinks(value)) {
    change.unwrapInline('link')
  }
  else if (value.isExpanded && !hasMultiBlocks(value)) {
    const { startOffset } = value.selection

    // fix offset 0 selection:
    // add a single white space and select forward white space
    if (startOffset === 0) {
      change
        .insertText(` ${value.anchorText.text}`)
        .moveOffsetsTo(1, value.anchorText.characters.size + 1)
    }

    change
      .wrapInline(createLink({ target: '_blank', openModal: true }))

    // fix offset 0 selection:
    // remove the white space added before
    if (startOffset === 0) {
      change
        .moveOffsetsTo(0, 0)
        .deleteBackward()
    }
  }
  else if (hasMultiBlocks(value)) {
    console.info('[SlateJS][LinkPlugin] has multiple blocks on selection')
  }
  else if (value.isCollapsed && !hasLinks(value)) {
    console.info('[SlateJS][LinkPlugin] selection collapsed, w/o links on selection')
  }

  return change
}
