import React from 'react'

const OrderedListNode = ({ attributes, children }) => (
  <ol {...attributes}>
    {children}
  </ol>
)

export default OrderedListNode
