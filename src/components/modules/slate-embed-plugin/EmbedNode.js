import React from 'react'
import classnames from 'classnames'

import './EmbedNode.css'


const EmbedNode = ({ attributes, state, children, node }) => {
  return (
    <span
      {...attributes}
      className={classnames(
        'slate-embed-plugin--node',
        { active: state.selection.hasEdgeIn(node) },
      )}
      dangerouslySetInnerHTML={{ __html: node.data.get('embed') }}
    />
  )
}

export default EmbedNode
