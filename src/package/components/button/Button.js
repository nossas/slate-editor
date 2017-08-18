import React from 'react'
import {isFunction} from './../../SlateEditor/Utils'

const Button = ({ children, id, onClick, className, style, type, ...props }) => (
  <button
    id={id}
    style={style}
    type={type}
    onClick={(e) => isFunction(onClick) && onClick(e) }
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
