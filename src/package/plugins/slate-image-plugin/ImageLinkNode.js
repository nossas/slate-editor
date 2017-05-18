import React from 'react'

const ImageLinkNode = ({
  node,
  state,
  attributes,
  readOnly
}) => (
  <a
    href="https://google.com"
    target="_blank"
  >
    <img
      {...attributes}
      role="presentation"
      className="image-node"
      src={node.data.get('src')}
    />
  </a>
)

export default ImageLinkNode
