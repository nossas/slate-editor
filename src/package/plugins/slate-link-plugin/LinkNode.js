import React from 'react'

import './LinkNode.css'


const LinkNode = ({
  children,
  attributes,
  node: { data },
  editor: {
    props: { readOnly }
  }
}) => (
  <a
    {...attributes}
    className="link-node"
    href={data.get('href')}
    target={data.get('target')}
    title={data.get('title')}
    onClick={({ target: { tagName } }) => {
      if (readOnly && tagName === 'IMG') window.location = data.get('href')
    }}
  >
    {children}
  </a>
)

export default LinkNode
