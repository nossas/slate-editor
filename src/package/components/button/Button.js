import React from 'react'
import {isFunction} from './../../SlateEditor/Utils'

const Button = ({ children, id, onClick, className, style, type }) => (
  <button
    id={id}
    style={style}
    onClick={(e) => isFunction(onClick) && onClick(e) }
    className={className}
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: 'button'
}

export default Button
