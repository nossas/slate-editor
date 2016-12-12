import React from 'react'
import FontAwesome from 'react-fontawesome'

import { insertImageStrategy } from './ImageUtils'


const ImageButton = ({ state, onChange, className, style }) => (
  <button
    style={style}
    className={className}
    onClick={e => onChange(insertImageStrategy(state))}
  >
    <FontAwesome name="image" />
  </button>
)

export default ImageButton
