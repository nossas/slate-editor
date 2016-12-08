import React from 'react'


const FontSizeMark = ({ children, mark: { data } }) => (
  <span style={{ fontSize: data.get('fontSize'), verticalAlign: 'middle' }}>
    {children}
  </span>
)

export default FontSizeMark
