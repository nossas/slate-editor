import React from 'react'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./Modal.css')

const Modal = ({ children }) => (
  <div className="modal--layer">
    <div className="modal--container">
      {children}
    </div>
  </div>
)

Modal.Header = ({ title = 'Edit', closeButtonAction }) => (
  <div className="modal--header">
    {title}
    {closeButtonAction && (
      <button
        className="button--close"
        onClick={closeButtonAction}
      />
    )}
  </div>
)

export default Modal
