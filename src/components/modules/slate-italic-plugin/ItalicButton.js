import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { italicMarkStrategy, hasMark } from './ItalicUtils'


const ItalicButton = ({ state, onChange, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(italicMarkStrategy(state))}
    className={classnames(
      'slate-italic-plugin--button',
      { active: hasMark(state) },
      className,
    )}
  >
    <FontAwesome name="italic" />
  </button>
)

export default ItalicButton
