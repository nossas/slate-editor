import React from 'react'
import classnames from 'classnames'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageNode.css')


const ImageNode = ({
  node,
  state,
  attributes,
  editor: {
    props: { readOnly }
  }
}) => (
  <div
    className={classnames(
      'image-node--container',
      {
        readonly: readOnly,
      }
    )}
  >
    <button className="image-node--edit-button">Editar</button>
    <img
      {...attributes}
      role="presentation"
      className={classnames(
        'image-node',
        {
          active: state.selection.hasEdgeIn(node),
        },
      )}
      src={node.data.get('src')}
    />
  </div>
)

export default ImageNode
