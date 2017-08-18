import React from 'react'

const cloneElement = (children, props) => {
  if (children && !children.length) {
    children = [children, ]
  }

  return children && children.map((child, index) => React.cloneElement(child, {
    ...props,
    key: index
  }))
}

const isFunction = (obj) => {
  return !!(obj && obj.constructor === Function)
}

export {
  cloneElement,
  isFunction
}
