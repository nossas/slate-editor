import React, { Component } from 'react'
import { updateInlineImage } from './ImageUtils'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageDataModal.css')

class ImageDataModal extends Component {
  constructor(props) {
    super(props)

    const { node } = this.props

    this.state = {
      imageAttributes: {
        src: node.data.get('src'),
        title: node.data.get('title'),
        href: node.data.get('href'),
        openExternal: node.data.get('openExternal'),
      },
    }
  }

  setImageAttribute(event, value) {
    this.setState({
      imageAttributes: {
        ...this.state.imageAttributes,
        [event.target.name]: value,
      }
    })
  }

  render() {
    const { node, state, onChange, changeModalState } = this.props

    return (
      <div className="image-plugin--edit-modal-layer">
        <div className="image-plugin--edit-modal">
          <div className="modal--header">
            Edit
            <button
              className="button--close"
              onClick={() => changeModalState(false)}
            />
          </div>
          <div className="modal--content">
            <div className="modal--content-left">
              <img src={node.data.get('src')} role="presentation" />
            </div>

            <div className="modal--content-right">
              <form onSubmit={e => {
                e.preventDefault()
                onChange(updateInlineImage({ state, data: this.state.imageAttributes }))
                changeModalState(false)
              }}>
                <div className="form-group">
                  <label htmlFor="image-plugin--edit-title">Title</label>
                  <input
                    id="image-plugin--edit-title"
                    type="text"
                    name="title"
                    onClick={e => e.stopPropagation()}
                    onChange={e => this.setImageAttribute(e, e.target.value)}
                    value={this.state.imageAttributes.title}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image-plugin--edit-href">Link</label>
                  <input
                    id="image-plugin--edit-href"
                    type="text"
                    name="href"
                    onClick={e => e.stopPropagation()}
                    onChange={e => this.setImageAttribute(e, e.target.value)}
                    value={this.state.imageAttributes.href}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image-plugin--edit-open-external">
                    <input
                      id="image-plugin--edit-open-external"
                      type="checkbox"
                      name="openExternal"
                      onClick={e => e.stopPropagation()}
                      onChange={e => this.setImageAttribute(e, e.target.checked)}
                      checked={this.state.imageAttributes.openExternal}
                    />
                    Open link in new tab
                  </label>
                </div>

                <div className="container--action-buttons">
                  <button type="submit" className="primary">Save</button>
                  <button type="button" className="opaque">Cancel</button>
                  <button type="button" className="danger">Delete</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageDataModal
