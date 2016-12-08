import React from 'react'


const FontSizeNode = ({ attributes, children, node: { data } }) => (
  <span
    {...attributes}
    style={{ fontSize: data.get('fontSize'), verticalAlign: 'middle' }}
  >
    {children}
  </span>
)

export default FontSizeNode
