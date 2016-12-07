import React from 'react'


const LinkNode = ({ node: { data }, attributes, children }) => (
  <a
    {...attributes}
    href={data.get('href')}
  >
    {children}
  </a>
)

export default LinkNode
