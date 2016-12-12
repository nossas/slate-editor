import React from 'react'


const GridCellNode = ({ attributes, children }) => (
  <td {...attributes}>
    {children}
  </td>
)

export default GridCellNode
