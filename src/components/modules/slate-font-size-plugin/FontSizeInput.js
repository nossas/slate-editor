import React from 'react'
import keycode from 'keycode'

import { fontSizeNodeIncreaseStrategy, fontSizeStrategy } from './FontSizeUtils'

import './FontSizeInput.css'

const FontSizeInput = ({
  state,
  onChange,
  changeState,
  initialFontSize,
  outerState: { fontSize: fontSizeState },
}) => {
  if (!fontSizeState) changeState({ state, fontSize: initialFontSize })

  return (
    <input
      onKeyDown={({ target: { value: fontSizeValue }, keyCode }) => {
        const fontSize = Number(fontSizeValue)
        const isEnter = keycode(keyCode) === 'enter'

        // Set new font size to selection
        if (isEnter) changeState({ fontSize, state: fontSizeStrategy({ state, fontSize, changeState }) })
        else changeState({ fontSize, state })
      }}
      onChange={({ target: { value: fontSizeValue } }) => {
        if (Number(fontSizeValue) <= 0) fontSizeValue = '1'
        const fontSize = fontSizeValue || '1'

        // Only handle the input value
        changeState({ state, fontSize })
      }}
      onFocus={e => e.target.select()}
      className="slate-font-size-plugin-input"
      type="number"
      value={fontSizeState}
      min="1"
    />
  )
}

export default FontSizeInput
