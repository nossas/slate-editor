import React, { Component } from 'react'
import { hasLinks } from './LinkUtils'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./LinkNode.css')

class LinkNode extends Component {
  render() {
    const {
      children,
      attributes,
      state,
      node: { data },
      editor: {
        props: { readOnly }
      }
    } = this.props

    return (
      <span className="link-node-container">
        <div
          className="link-node--tooltip"
          contentEditable={false}
          style={{ display: hasLinks(state) ? 'block' : 'none' }}
        >
          <a
            className="tooltip--item"
            href={data.get('href')}
            target="_blank"
          >
            {data.get('href')}
          </a>
          |
          <div className="tooltip--item">
            Edit
          </div>
          |
          <div className="tooltip--item">
            Unlink
          </div>
        </div>
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
      </span>
    )
  }
}

export default LinkNode
