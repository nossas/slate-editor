import React from 'react'

const ListItemNode = ({ attributes, children }) => (
  <li {...attributes}>
    {children}
  </li>
)

export default ListItemNode
