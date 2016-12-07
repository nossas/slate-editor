import React from 'react'
import FontAwesome from 'react-fontawesome'

import { boldMarkStrategy } from './BoldUtils'


const BoldButton = ({ state: { editorState }, onChange }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange(boldMarkStrategy(editorState))
    }}
  >
    <FontAwesome name="bold" />
  </button>
)

export default BoldButton
