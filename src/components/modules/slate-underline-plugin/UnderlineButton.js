import React from 'react'
import FontAwesome from 'react-fontawesome'

import { underlineMarkStrategy, hasMark } from './UnderlineUtils'
import './UnderlineButton.css'


const UnderlineButton = ({ state, onChange, changeState }) => (
  <button
    className="slate-underline-plugin--button"
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
