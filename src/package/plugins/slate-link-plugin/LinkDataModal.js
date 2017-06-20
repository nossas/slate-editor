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
        href: node.data.get('href'),
        text: node.data.get('text') || this.props.presetData.text,
        target: node.data.get('target'),
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

  componentDidMount() {
    this.inputHref.focus()
  }

  setLinkAttribute(event, value) {
    this.setState({
      imageAttributes: {
        ...this.state.imageAttributes,
        [event.target.name]: value,
      }
    })
  }

  isValidHref(href) {
    // allow http://, https:// (secure) and non-protocol (default http://)
    return /^(https?:\/\/)?[\w]{2,}\.[\w\.]{2,}$/.test(href)
  }

  render() {
    const { node, state, onChange, changeModalState } = this.props

    return (
      <Modal>
        <Modal.Header
          closeButtonAction={() => {
            if (!node.data.get('href')) onChange(unlink(state))
            changeModalState(false)
          }}
        />

        <ModalContent>
          <ModalContent.Right>
            <ModalForm onSubmit={e => {
              e.preventDefault()

              const { imageAttributes } = this.state

              if (!imageAttributes.href) {
                onChange(unlink(state))
              } else {
                onChange(updateLinkStrategy({ state, data: imageAttributes }))
              }

              changeModalState(false)
            }}>
              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-title">Título</label>
                <ModalForm.LabelHelper>
                  Esta mensagem aparecerá quando o cursor do mouse
                  estiver posicionado sobre o link.
                </ModalForm.LabelHelper>
                <input
                  id="image-plugin--edit-title"
                  type="text"
                  name="title"
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.setLinkAttribute(e, e.target.value)}
                  value={this.state.imageAttributes.title}
                  placeholder="Insira uma descrição para o link"
                />
              </ModalForm.Group>

              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-href">URL</label>
                <input
                  id="image-plugin--edit-href"
                  type="text"
                  name="href"
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.setLinkAttribute(e, e.target.value)}
                  value={this.state.imageAttributes.href}
                  placeholder="Ex: http://dominio.com"
                  ref={input => this.inputHref = input}
                />
              </ModalForm.Group>

              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-text">Texto</label>
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
                    name="target"
                    onClick={e => e.stopPropagation()}
                    onChange={e => this.setLinkAttribute(e, e.target.checked)}
                    checked={this.state.imageAttributes.target === '_blank'}
                  />
                  Abrir em nova aba
                </label>
              </ModalForm.Group>

              <ModalButton.Container>
                <ModalButton.Primary
                  type="submit"
                  text="Salvar"
                />
                <ModalButton.Opaque
                  text="Cancelar"
                  onClick={() => {
                    if (!node.data.get('href')) onChange(unlink(state))
                    changeModalState(false)
                  }}
                />
                <ModalButton.Danger
                  text="Remover"
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
