import React from 'react'


const AlignmentNode = ({ children, node: { data } }) => (
  <div style={{ textAlign: `${data.get('align')}` }}>
    {children}
  </div>
)

export default AlignmentNode
