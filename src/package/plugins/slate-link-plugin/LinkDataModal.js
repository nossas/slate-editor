import React, { Component } from 'react'
import { updateLinkStrategy, unlink } from './LinkUtils'
import { Modal, ModalButton, ModalContent, ModalForm } from '../../components/modal'

class LinkDataModal extends Component {
  constructor(props) {
    super(props)

    const { node } = this.props

    this.state = {
      imageAttributes: {
        title: node.data.get('title'),
        url: node.data.get('url'),
        text: node.data.get('text') || this.props.presetData.text,
        openExternal: node.data.get('openExternal'),
      },
    }
  }

  hasNodeText(props) {
    return props.node.data.get('text')
  }

  componentWillUpdate(props) {
    const hasDiffText = this.props.presetData.text !== props.presetData.text

    if (!this.hasNodeText(this.props) && hasDiffText) {
      this.setLinkAttribute(
        { target: { name: 'text' } },
        props.presetData.text
      )
    }
  }

  componentWillMount() {
    const hasDiffText = this.props.presetData.text !== this.state.imageAttributes.text

    // update the text input value according to text that
    // have modified inline outside of the modal.
    if (this.hasNodeText(this.props) && hasDiffText) {
      this.setLinkAttribute(
        { target: { name: 'text' } },
        this.props.presetData.text
      )
    }
  }

  setLinkAttribute(event, value) {
    this.setState({
      imageAttributes: {
        ...this.state.imageAttributes,
        [event.target.name]: value,
      }
    })
  }

  isValidURL(url) {
    return /^https?:\/\/[\w]{2,}\.[\w\.]{2,}$/.test(url)
  }

  render() {
    const { state, onChange, changeModalState } = this.props

    return (
      <Modal>
        <Modal.Header
          closeButtonAction={() => changeModalState(false)}
        />

        <ModalContent>
          <ModalContent.Right>
            <ModalForm onSubmit={e => {
              e.preventDefault()

              const { imageAttributes } = this.state

              if (this.isValidURL(imageAttributes.url)) {
                onChange(updateLinkStrategy({ state, data: this.state.imageAttributes }))
                changeModalState(false)
              }
            }}>
              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-title">Title</label>
                <input
                  id="image-plugin--edit-title"
                  type="text"
                  name="title"
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.setLinkAttribute(e, e.target.value)}
                  value={this.state.imageAttributes.title}
                />
              </ModalForm.Group>

              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-url">URL</label>
                <input
                  id="image-plugin--edit-url"
                  type="text"
                  name="url"
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.setLinkAttribute(e, e.target.value)}
                  value={this.state.imageAttributes.url}
                />
              </ModalForm.Group>

              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-text">Text</label>
                <input
                  id="image-plugin--edit-text"
                  type="text"
                  name="text"
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.setLinkAttribute(e, e.target.value)}
                  value={this.state.imageAttributes.text}
                />
              </ModalForm.Group>

              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-open-external">
                  <input
                    id="image-plugin--edit-open-external"
                    type="checkbox"
                    name="openExternal"
                    onClick={e => e.stopPropagation()}
                    onChange={e => this.setLinkAttribute(e, e.target.checked)}
                    checked={this.state.imageAttributes.openExternal}
                  />
                  Open link in new tab
                </label>
              </ModalForm.Group>

              <ModalButton.Container>
                <ModalButton.Primary
                  type="submit"
                  text="Save"
                />
                <ModalButton.Opaque
                  text="Cancel"
                  onClick={() => changeModalState(false)}
                />
                <ModalButton.Danger
                  text="Unlink"
                  onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    onChange(unlink(state))
                    changeModalState(false)
                  }}
                />
              </ModalButton.Container>
            </ModalForm>
          </ModalContent.Right>
        </ModalContent>
      </Modal>
    )
  }
}

export default LinkDataModal
