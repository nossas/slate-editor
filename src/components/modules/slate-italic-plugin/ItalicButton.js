import React from 'react'
import FontAwesome from 'react-fontawesome'

import { italicMarkStrategy } from './ItalicUtils'


const ItalicButton = ({ state, onChange }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange(italicMarkStrategy(state))
    }}
  >
    <FontAwesome name="italic" />
  </button>
)

export default ItalicButton
