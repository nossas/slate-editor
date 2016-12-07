import React from 'react'


const ImageNode = ({ node, state, attributes }) => {

  const isFocused = state.selection.hasEdgeIn(node)
  const src = node.data.get('src')
  const className = isFocused ? 'active' : null

  return (
    <img
      {...attributes}
      role="presentation"
      className={className}
      src={src}
    />
  )
}

export default ImageNode
