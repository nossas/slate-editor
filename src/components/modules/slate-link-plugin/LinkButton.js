import React from 'react'
import FontAwesome from 'react-fontawesome';

import { insertLinkStrategy, hasLinks } from './LinkUtils'
import './LinkButton.css'


const LinkButton = ({ state, onChange }) => (
  <button
    className="slate-link-plugin--button"
    onMouseDown={e => {
      e.preventDefault()
      onChange(insertLinkStrategy(state))
    }}
    data-active={hasLinks(state)}
  >
    <FontAwesome name="link" />
  </button>
)

export default LinkButton
