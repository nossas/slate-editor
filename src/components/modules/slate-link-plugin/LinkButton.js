import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { insertLinkStrategy, hasLinks } from './LinkUtils'


const LinkButton = ({ state, onChange, className, style }) => (
  <button
    style={style}
    onMouseDown={e => onChange(insertLinkStrategy(state))}
    className={classnames(
      'slate-link-plugin--button',
      { active: hasLinks(state) },
      className,
    )}
  >
    <FontAwesome name="link" />
  </button>
)

export default LinkButton
