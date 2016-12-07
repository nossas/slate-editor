import React from 'react'
import classnames from 'classnames'

import './ImageNode.css'


const ImageNode = ({ node, state, attributes }) => {

  const isFocused = state.selection.hasEdgeIn(node)
  const src = node.data.get('src')

  return (
    <img
      {...attributes}
      role="presentation"
      className={classnames('image-node', { 'active': isFocused })}
      src={src}
    />
  )
}

export default ImageNode
