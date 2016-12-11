import React from 'react'
import FontAwesome from 'react-fontawesome'

import { insertImageStrategy } from './ImageUtils'


const ImageButton = ({ state, onChange, className }) => (
  <button
    className={className}
    onClick={e => {
      e.preventDefault()
      onChange(insertImageStrategy(state))
    }}
  >
    <FontAwesome name="image" />
  </button>
)

export default ImageButton
