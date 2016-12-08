import React from 'react'

import { fontSizeMarkStrategy } from './FontSizeUtils'

import './FontSizeInput.css'

const FontSizeInput = ({
  state,
  onChange,
  changeState,
  initialFontSize,
  outerState: { fontSize: fontSizeState },
}) => {
  !fontSizeState && changeState({ state, fontSize: initialFontSize })

  return (
    <input
      onChange={({ target: { value: fontSizeValue } }) => {
        const fontSize = Number(fontSizeValue)
        changeState({ state, fontSize })
      }}
      className="slate-font-size-plugin-input"
      type="number"
      value={fontSizeState}
    />
  )
}

export default FontSizeInput
