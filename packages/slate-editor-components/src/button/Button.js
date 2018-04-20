import React from 'react'
import { typeCheck } from '@slate-editor/utils'

const Button = ({ children, id, onClick, className, style, type, ...props }) => (
  <button
    id={id}
    style={style}
    type={type}
    onClick={(e) => typeCheck.isFunction(onClick) && onClick(e) }
    className={className}
    {...props}
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: 'button'
}

export default Button
