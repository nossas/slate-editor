import React, { Component } from 'react'
import { Modal, ModalButton, ModalContent, ModalForm } from '@slate-editor/components'
import { updateInlineImage, deleteInlineImage } from './ImageUtils'

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
    const { node, value, onChange, changeModalState } = this.props

    return (
      <Modal>
        <Modal.Header
          closeButtonAction={() => changeModalState(false)}
        />

        <ModalContent>
          <ModalContent.Left>
            <img src={node.data.get('src')} alt={node.data.get('title')} role="presentation" />
          </ModalContent.Left>

          <ModalContent.Right>
            <ModalForm onSubmit={e => {
              e.preventDefault()
              onChange(updateInlineImage({ change: value.change(), data: this.state.imageAttributes }))
              changeModalState(false)
            }}>
              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-title">Título</label>
                <ModalForm.LabelHelper>
                  Esta mensagem aparecerá quando o cursor do mouse
                  estiver posicionado sobre a imagem.
                </ModalForm.LabelHelper>
                <input
                  id="image-plugin--edit-title"
                  type="text"
                  name="title"
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.setImageAttribute(e, e.target.value)}
                  value={this.state.imageAttributes.title || ''}
                  placeholder='Insira uma descrição para a imagem'
                />
              </ModalForm.Group>

              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-href">Link</label>
                <input
                  id="image-plugin--edit-href"
                  type="text"
                  name="href"
                  onClick={e => e.stopPropagation()}
                  onChange={e => this.setImageAttribute(e, e.target.value)}
                  value={this.state.imageAttributes.href || ''}
                  placeholder='Ex: http://dominio.com'
                />
              </ModalForm.Group>

              <ModalForm.Group>
                <label htmlFor="image-plugin--edit-open-external">
                  <input
                    id="image-plugin--edit-open-external"
                    type="checkbox"
                    name="openExternal"
                    onClick={e => e.stopPropagation()}
                    onChange={e => this.setImageAttribute(e, e.target.checked)}
                    checked={!!this.state.imageAttributes.openExternal}
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
                  onClick={() => changeModalState(false)}
                />
                <ModalButton.Danger
                  text="Deletar"
                  onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    onChange(deleteInlineImage({ change: value.change() }))
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

export default ImageDataModal
