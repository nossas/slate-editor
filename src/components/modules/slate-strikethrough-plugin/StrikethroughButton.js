import React from 'react'
import FontAwesome from 'react-fontawesome'

import { strikethroughMarkStrategy } from './StrikethroughUtils'


const StrikethroughButton = ({ state, onChange, changeState }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange(strikethroughMarkStrategy(state))
    }}
  >
    <FontAwesome name="strikethrough" />
  </button>
)

export default StrikethroughButton
