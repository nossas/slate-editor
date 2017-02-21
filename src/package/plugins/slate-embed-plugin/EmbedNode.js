import React from 'react'
import classnames from 'classnames'

// FIXME: Needs to handle assets files to work with SSR
if (process.env.REACT_APP_BROWSER || process.env.BROWSER) require('./EmbedNode.css')


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
