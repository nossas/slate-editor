import React, { Component } from 'react'
import classnames from 'classnames'

import { updateInlineImage } from './ImageUtils'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageNode.css')

class ImageNode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalActive: false,
      imageAttributes: {
        src: this.props.node.data.get('src'),
        title: undefined,
        href: undefined,
        openExternal: false,
      },
    }
  }

  modal(modalActive) {
    this.setState({ modalActive })
  }

  setImageAttribute(event) {
    this.setState({
      imageAttributes: {
        ...this.state.imageAttributes,
        [event.target.name]: event.target.value,
      }
    })
  }

  render() {
    const {
      node,
      state,
      attributes,
      readOnly,
      editor: { onChange },
    } = this.props

    return (
      <span>
        {!this.state.modalActive ? null : (
          <div className="image-plugin--edit-modal-layer">
            <div className="image-plugin--edit-modal">
              <div className="modal--header">
                Edit
                <button
                  className="button--close"
                  onClick={() => this.modal(false)}
                />
              </div>
              <div className="modal--content">
                <div className="modal--content-left">
                  <img src={node.data.get('src')} />
                </div>

                <div className="modal--content-right">
                  <form onSubmit={e => {
                    e.preventDefault()
                    onChange(updateInlineImage({ state, data: this.state.imageAttributes }))
                    this.modal(false)
                  }}>
                    <div className="form-group">
                      <label htmlFor="image-plugin--edit-title">Title</label>
                      <input
                        id="image-plugin--edit-title"
                        type="text"
                        name="title"
                        onClick={e => e.stopPropagation()}
                        onBlur={e => {
                          e.stopPropagation()
                          this.setImageAttribute(e)
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="image-plugin--edit-href">Link</label>
                      <input
                        id="image-plugin--edit-href"
                        type="text"
                        name="href"
                        onClick={e => e.stopPropagation()}
                        onBlur={e => {
                          e.stopPropagation()
                          this.setImageAttribute(e)
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="image-plugin--edit-open-external">
                        <input
                          id="image-plugin--edit-open-external"
                          type="checkbox"
                          name="openExternal"
                          onClick={e => e.stopPropagation()}
                          onChange={e => {
                            e.stopPropagation()
                            this.setImageAttribute(e)
                          }}
                        />
                        Open link in new tab
                      </label>
                    </div>

                    <div className="container--action-buttons">
                      <button type="submit">Save</button>
                      <button type="button">Cancel</button>
                      <button type="button">Delete</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={classnames(
            'image-node--container',
            {
              readonly: readOnly,
            }
          )}
        >
          <div
            className="image-node--image-edit-layer"
            onClick={() => this.modal(true)}
          >
            <button
              className="image-node--image-edit-button"
              onClick={() => this.modal(true)}
            >
              Edit
            </button>
          </div>
          <img
            {...attributes}
            role="presentation"
            className={classnames(
              'image-node',
              {
                active: state.selection.hasEdgeIn(node),
              },
            )}
            src={node.data.get('src')}
            title={node.data.get('title')}
          />
        </div>
      </span>
    )
  }
}

export default ImageNode
