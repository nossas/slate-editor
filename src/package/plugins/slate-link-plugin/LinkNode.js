import React, { Component } from 'react'
import { hasLinks } from './LinkUtils'
import Tooltip from '../../components/tooltip'

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
        <Tooltip style={{ display: hasLinks(state) ? 'block' : 'none' }}>
          <Tooltip.Item>
            <a href={data.get('href')} target="_blank">
              {data.get('href')}
            </a>
          </Tooltip.Item>
          <Tooltip.Item>Edit</Tooltip.Item>
          <Tooltip.Item>Unlink</Tooltip.Item>
        </Tooltip>
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
