import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { strikethroughMarkStrategy, hasMark } from './StrikethroughUtils'


const StrikethroughButton = ({ state, onChange, changeState, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(strikethroughMarkStrategy(state))}
    className={classnames(
      'slate-strikethrough-plugin--button',
      { active: hasMark(state) },
      className,
    )}
  >
    <FontAwesome name="strikethrough" />
  </button>
)

export default StrikethroughButton
