import React from 'react'
import FontAwesome from 'react-fontawesome'

import { insertImageStrategy } from './ImageUtils'


const ImageButton = ({ state: { editorState }, onChange }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange(insertImageStrategy(editorState))
    }}
  >
    <FontAwesome name="image" />
  </button>
)

export default ImageButton
