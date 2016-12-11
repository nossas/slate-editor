import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { strikethroughMarkStrategy, hasMark } from './StrikethroughUtils'
import './StrikethroughButton.css'


const StrikethroughButton = ({ state, onChange, changeState, className, style }) => (
  <button
    className={classnames('slate-strikethrough-plugin--button', className)}
    style={style}
    onClick={e => {
      e.preventDefault()
      onChange(strikethroughMarkStrategy(state))
    }}
    data-active={hasMark(state)}
  >
    <FontAwesome name="strikethrough" />
  </button>
)

export default StrikethroughButton
