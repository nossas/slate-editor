import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { boldMarkStrategy, hasMark } from './BoldUtils'
import './BoldButton.css'


const BoldButton = ({ state, onChange, changeState, className, style }) => (
  <button
    className={classnames('slate-bold-plugin--button', className)}
    style={style}
    onClick={e => {
      e.preventDefault()
      onChange(boldMarkStrategy(state))
    }}
    data-active={hasMark(state)}
  >
    <FontAwesome name="bold" />
  </button>
)

export default BoldButton
