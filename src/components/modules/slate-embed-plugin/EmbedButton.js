import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { appendEmbed, hasEmbed } from './EmbedUtils'


const EmbedButton = ({ state, onChange, changeState, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(appendEmbed(state))}
    className={classnames(
      'slate-embed-plugin--button',
      { active: hasEmbed(state) },
      className,
    )}
  >
    <FontAwesome name="code" />
  </button>
)

export default EmbedButton
