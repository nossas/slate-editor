import React from 'react'


export const ToggleContentEditableButton = ({ state, onChange }) => (
  <button
    onMouseDown={e => {
      e.preventDefault()
      onChange(onClickLink(state))
    }}
  >
    Link
  </button>
)
