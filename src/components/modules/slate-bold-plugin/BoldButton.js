import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { boldMarkStrategy, hasMark } from './BoldUtils'


const BoldButton = ({ state, onChange, changeState, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(boldMarkStrategy(state))}
    className={classnames(
      'slate-bold-plugin--button',
      { active: hasMark(state) },
      className,
    )}
  >
    <FontAwesome name="bold" />
  </button>
)

export default BoldButton
