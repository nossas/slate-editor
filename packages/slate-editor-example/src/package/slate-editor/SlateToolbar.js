import React from 'react'
import classnames from 'classnames'
import { cloneElement } from '../utils/react'

export default ({ children, style, className, ...rest }) => (
  <div className={classnames('editor--toolbar', className)} style={style}>
    {cloneElement(children, rest)}
  </div>
)
