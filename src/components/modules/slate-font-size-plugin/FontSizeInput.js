import React from 'react'

import { fontSizeMarkStrategy } from './FontSizeUtils'

import './FontSizeInput.css'

const FontSizeInput = ({
  state,
  onChange,
  changeState,
  outerState: { fontSize: fontSizeState },
}) => (
  <input
    onChange={({ target: { value: fontSizeValue } }) => {
      const fontSize = Number(fontSizeValue)
      console.log('fontSize', fontSize)
      // onChange(fontSizeMarkStrategy({ state, fontSize }))
      changeState({ state, fontSize })
    }}
    className="slate-font-size-plugin-input"
    type="number"
    value={fontSizeState}
  />
)

export default FontSizeInput
