import React from 'react'
import FontAwesome from 'react-fontawesome'

import { boldMarkStrategy, hasMark } from './BoldUtils'
import './BoldButton.css'


const BoldButton = ({ state, onChange, changeState }) => (
  <button
    className="slate-bold-plugin--button"
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
