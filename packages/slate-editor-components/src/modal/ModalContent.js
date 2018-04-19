import React from 'react'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ModalContent.css')

const ModalContent = ({ children }) => (
  <div className="modal--content">
    {children}
  </div>
)

ModalContent.Left = ({ children }) => (
  <div className="modal--content-left">
    {children}
  </div>
)

ModalContent.Right = ({ children }) => (
  <div className="modal--content-right">
    {children}
  </div>
)

export default ModalContent
