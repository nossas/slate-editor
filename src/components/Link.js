import React from 'react'

export const LinkNode = (props) => {
  const { data } = props.node
  const href = data.get('href')
  return <a {...props.attributes} href={href}>{props.children}</a>
}

const hasLinks = state => state.inlines.some(inline => inline.type === 'link')

const onClickLink = state => {
  if (hasLinks(state)) {
    return state
      .transform()
      .unwrapInline('link')
      .apply()
  }

  else if (state.isExpanded) {
    const href = window.prompt('Enter the URL of the link:')
    return state
      .transform()
      .wrapInline({
        type: 'link',
        data: { href }
      })
      .collapseToEnd()
      .apply()
  }

  else {
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

export const InsertLinkButton = ({ state, onChange }) => (
  <button
    onMouseDown={e => {
      e.preventDefault()
      onChange(onClickLink(state))
    }}
    data-active={hasLinks(state)}
  >
    Link
  </button>
)
