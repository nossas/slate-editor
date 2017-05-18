import React, { Component } from 'react'
import classnames from 'classnames'

import ImageDataModal from './ImageDataModal'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageNode.css')

class ImageNode extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalActive: false }
  }

  modal(isModalActive) {
    this.setState({ isModalActive })
  }

  render() {
    const { isModalActive } = this.state
    const { node, state, attributes, readOnly, editor: { onChange } } = this.props

    return (
      <span>
        {!isModalActive ? null : (
          <ImageDataModal
            node={node}
            state={state}
            onChange={onChange}
            changeModalState={this.modal.bind(this)}
          />
        )}

        <div className={classnames('image-node--container', { readonly: readOnly })}>
          <div className="image-node--image-edit-layer" onClick={() => this.modal(true)}>
            <button className="image-node--image-edit-button" onClick={() => this.modal(true)}>
              Edit
            </button>
          </div>
          <img
            {...attributes}
            role="presentation"
            className="image-node"
            src={node.data.get('src')}
            title={node.data.get('title')}
          />
        </div>
      </span>
    )
  }
}

export default ImageNode
