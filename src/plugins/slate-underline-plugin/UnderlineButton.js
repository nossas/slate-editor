import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { underlineMarkStrategy, hasMark } from './UnderlineUtils'


const UnderlineButton = ({ state, onChange, changeState, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(underlineMarkStrategy(state))}
    className={classnames(
      'slate-underline-plugin--button',
      { active: hasMark(state) },
      className
    )}
  >
    <FontAwesome name="underline" />
  </button>
)

export default UnderlineButton
