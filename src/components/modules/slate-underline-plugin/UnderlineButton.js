import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { underlineMarkStrategy, hasMark } from './UnderlineUtils'
import './UnderlineButton.css'


const UnderlineButton = ({ state, onChange, changeState, className, style }) => (
  <button
    className={classnames('slate-underline-plugin--button', className)}
    style={style}
    onClick={e => {
      e.preventDefault()
      onChange(underlineMarkStrategy(state))
    }}
    data-active={hasMark(state)}
  >
    <FontAwesome name="underline" />
  </button>
)

export default UnderlineButton
