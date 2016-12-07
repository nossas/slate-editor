import React from 'react'
import FontAwesome from 'react-fontawesome'

import { boldMarkStrategy } from './BoldUtils'


const BoldButton = ({ state, onChange, changeState }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange(boldMarkStrategy(state))
    }}
  >
    <FontAwesome name="bold" />
  </button>
)

export default BoldButton
