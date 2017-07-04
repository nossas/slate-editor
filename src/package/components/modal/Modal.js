import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./Modal.css')

const Modal = ({ children }) => (
  <div className="modal--layer" contentEditable={false}>
    <div className="modal--container">
      {children}
    </div>
  </div>
)

Modal.Header = injectIntl(({ title, closeButtonAction, intl }) => (
  <div className="modal--header">
    {title}
    {closeButtonAction && (
      <button
        className="button--close"
        onClick={closeButtonAction}
        title={intl.formatMessage({
          id: 'modal--header.button--close.title',
          defaultMessage: 'Fechar'
        })}
      />
    )}
  </div>
))

Modal.Header.defaultProps = {
  title: (
    <FormattedMessage
      id='modal--header.title'
      defaultMessage='Editar'
    />
  )
}

export default Modal
