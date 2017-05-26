import React from 'react'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ModalButton.css')

const Container = ({ children }) => (
  <div className="modal-button--container">
    {children}
  </div>
)

const Primary = ({ text, type = 'button', onClick }) => (
  <button
    type={type}
    className="primary"
    onClick={onClick}
  >
    {text}
  </button>
)

const Opaque = ({ text, type = 'button', onClick }) => (
  <button
    type={type}
    className="opaque"
    onClick={onClick}
  >
    {text}
  </button>
)

const Danger = ({ text, type = 'button', onClick }) => (
  <button
    type={type}
    className="danger"
    onClick={onClick}
  >
    {text}
  </button>
)

export default {
  Container,
  Primary,
  Opaque,
  Danger
}
