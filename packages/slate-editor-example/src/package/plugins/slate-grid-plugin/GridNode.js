import React from 'react'


const GridNode = ({ attributes, children }) => (
  <table style={{ width: '100%', tableLayout: 'fixed' }}>
    <tbody {...attributes}>
      {children}
    </tbody>
  </table>
)

export default GridNode
