import React from 'react'


const GridRowNode = ({ attributes, children }) => (
  <tr {...attributes}>
    {children}
  </tr>
)

export default GridRowNode
