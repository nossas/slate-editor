import React from 'react'
import FontAwesome from 'react-fontawesome'

import { italicMarkStrategy } from './ItalicUtils'


const ItalicButton = ({ state: { editorState }, onChange }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange(italicMarkStrategy(editorState))
    }}
  >
    <FontAwesome name="italic" />
  </button>
)

export default ItalicButton
