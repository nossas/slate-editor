import React, { Component } from 'react'
import classnames from 'classnames'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageNode.css')

class ImageNode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalActive: false,
    }
  }

  modal(modalActive) {
    this.setState({ modalActive })
  }

  render() {
    const {
      node,
      state,
      attributes,
      editor: {
        props: { readOnly }
      }
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
                  <div className="form-group">
                    <label htmlFor="image-plugin--edit-title">Title</label>
                    <input
                      id="image-plugin--edit-title"
                      type="text"
                      onClick={e => {
                        e.stopPropagation()
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image-plugin--edit-link">Link</label>
                    <input id="image-plugin--edit-link" type="text" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image-plugin--edit-open-in-tab">
                      <input id="image-plugin--edit-open-in-tab" type="checkbox" />
                      Open link in new tab
                    </label>
                  </div>

                  <div className="container--action-buttons">
                    <button>Save</button>
                    <button>Cancel</button>
                    <button>Delete</button>
                  </div>
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
          />
        </div>
      </span>
    )
  }
}

export default ImageNode
