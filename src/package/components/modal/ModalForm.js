import React from 'react'
import classnames from 'classnames'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ModalForm.css')

const ModalForm = ({ children, className, ...props }) => (
  <form
    className={classnames('modal--form', className)}
    {...props}
  >
    {children}
  </form>
)

ModalForm.Group = ({ children, className, ...props }) => (
  <div
    className={classnames('modal--form-group', className)}
    {...props}
  >
    {children}
  </div>
)

ModalForm.LabelHelper = ({ children, className, ...props }) => (
  <span
    className={classnames('modal--form-label-helper', className)}
    {...props}
  >
    {children}
  </span>
)

export default ModalForm
