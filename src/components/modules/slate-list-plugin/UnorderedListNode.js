import React from 'react'

const UnorderedListNode = ({ attributes, children }) => (
  <ul {...attributes}>
    {children}
  </ul>
)

export default UnorderedListNode
