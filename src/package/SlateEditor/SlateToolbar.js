import React from 'react'
import classnames from 'classnames'
import Utils from './Utils'

export default ({ children, style, className, ...rest }) => (
  <div className={classnames('editor--toolbar', className)} style={style}>
    {Utils.cloneElement(children, rest)}
  </div>
)
