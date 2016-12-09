import React from 'react'
import FontAwesome from 'react-fontawesome'

import { italicMarkStrategy, hasMark } from './ItalicUtils'
import './ItalicButton.css'


const ItalicButton = ({ state, onChange }) => (
  <button
    className="slate-italic-plugin--button"
    onClick={e => {
      e.preventDefault()
      onChange(italicMarkStrategy(state))
    }}
    data-active={hasMark(state)}
  >
    <FontAwesome name="italic" />
  </button>
)

export default ItalicButton
