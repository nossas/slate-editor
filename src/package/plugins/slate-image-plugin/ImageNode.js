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
}) => (
  <img
    {...attributes}
    role="presentation"
    className={classnames(
      'image-node',
      {
        readonly: readOnly,
        active: state.selection.hasEdgeIn(node),
      },
    )}
    src={node.data.get('src')}
  />
)

export default ImageNode
