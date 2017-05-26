import React from 'react'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./Tooltip.css')

const Tooltip = ({ children, className, ...props }) => (
  <div
    className="tooltip--container"
    contentEditable={false}
    {...props}
  >
    {children}
  </div>
)

Tooltip.Item = ({ children }) => (
  <div className="tooltip--item">
    {children}
  </div>
)

export default Tooltip
