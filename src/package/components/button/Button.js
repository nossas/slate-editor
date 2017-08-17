import React from 'react'

const preventDefault = (callback) => (e) => {
  e.preventDefault()
  callback && callback(e)
}

export default ({ children, id, onClick, className, style }) => (
  <button
    id={id}
    style={style}
    onClick={preventDefault(onClick)}
    className={className}
  >
    {children}
  </button>
)
