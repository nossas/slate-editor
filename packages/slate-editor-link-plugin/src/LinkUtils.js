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
  const { selection } = value

  if (selection.isCollapsed) {
    change
      .moveAnchorTo(0)
      .moveFocusTo(text && text.length)
  }

  change
    .insertText(text)
    .setInlines({
      type: 'link',
      data: { title, href, text, target }
    })

  return change
}

export const insertLinkStrategy = change => {
  const { value } = change
  const { selection } = value

  if (hasLinks(value)) {
    change.unwrapInline('link')
  }

  else if (selection.isExpanded && !hasMultiBlocks(value)) {
    change
      .wrapInline(createLink({ target: '_blank', openModal: true }))
  }

  else if (hasMultiBlocks(value)) {
    console.info('[SlateJS][LinkPlugin] has multiple blocks on selection')
  }

  else if (selection.isCollapsed && !hasLinks(value)) {
    console.info('[SlateJS][LinkPlugin] selection collapsed, w/o links on selection')
  }

  return change
}
