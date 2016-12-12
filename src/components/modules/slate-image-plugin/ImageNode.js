import React from 'react'
import classnames from 'classnames'

import './ImageNode.css'


const ImageNode = ({
  node,
  state,
  attributes,
  editor: {
    props: { readOnly }
  }
}) => {

  const isFocused = state.selection.hasEdgeIn(node)
  const src = node.data.get('src')
  const className = isFocused ? 'active' : null

  return (
    <img
      {...attributes}
      role="presentation"
      className={classnames(
        'image-node',
        { 'readonly': readOnly },
        className,
      )}
      src={src}
    />
  )
}

export default ImageNode
