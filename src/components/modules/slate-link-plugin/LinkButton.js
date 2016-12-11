import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { insertLinkStrategy, hasLinks } from './LinkUtils'
import './LinkButton.css'


const LinkButton = ({ state, onChange, className }) => (
  <button
    className={classnames('slate-link-plugin--button', className)}
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
