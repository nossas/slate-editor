import React from 'react'
import classnames from 'classnames'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./EmbedNode.css')


const EmbedNode = ({ attributes, editor, children, node, isSelected }) => {
  return (
    <span
      {...attributes}
      className={classnames(
        'slate-embed-plugin--node',
        { active: isSelected },
      )}
      dangerouslySetInnerHTML={{ __html: node.data.get('embed') }}
    />
  )
}

export default EmbedNode
