import React from 'react'
import FontAwesome from 'react-fontawesome'

import { insertImageStrategy } from './ImageUtils'


const ImageButton = ({ state, onChange, className, style }) => (
  <button
    className={className}
    style={style}
    onClick={e => {
      e.preventDefault()
      onChange(insertImageStrategy(state))
    }}
  >
    <FontAwesome name="image" />
  </button>
)

export default ImageButton
