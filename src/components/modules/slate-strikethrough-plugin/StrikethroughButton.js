import React from 'react'
import FontAwesome from 'react-fontawesome'

import { strikethroughMarkStrategy, hasMark } from './StrikethroughUtils'
import './StrikethroughButton.css'


const StrikethroughButton = ({ state, onChange, changeState }) => (
  <button
    className="slate-strikethrough-plugin--button"
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
