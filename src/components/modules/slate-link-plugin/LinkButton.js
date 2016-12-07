import React from 'react'
import FontAwesome from 'react-fontawesome';

import { insertLinkStrategy, hasLinks } from './LinkUtils'
import './LinkButton.css'


const LinkButton = ({ state: { editorState }, onChange }) => (
  <button
    onMouseDown={e => {
      e.preventDefault()
      onChange(insertLinkStrategy(editorState))
    }}
    data-active={hasLinks(editorState)}
  >
    <FontAwesome name="link" />
  </button>
)

export default LinkButton
