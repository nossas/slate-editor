import React from 'react'

// FIXME: Needs to handle assets files to work with SSR
if (process.env.REACT_APP_BROWSER || process.env.BROWSER) require('./LinkNode.css')


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
