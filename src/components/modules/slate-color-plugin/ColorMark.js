import React from 'react'

const ColorMark = ({ children, mark: { data } }) => {
  const { r, g, b, a } = data.get('rgba')
  return (
    <span style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }}>
      {children}
    </span>
  )
}

export default ColorMark
