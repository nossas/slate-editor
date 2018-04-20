import React from 'react'

const FontSizeMark = ({ children, mark: { data } }) => (
  <span
    style={{
      fontSize: parseInt(data.get('fontSize'), 10),
      verticalAlign: 'middle'
    }}
  >
    {children}
  </span>
)

export default FontSizeMark
