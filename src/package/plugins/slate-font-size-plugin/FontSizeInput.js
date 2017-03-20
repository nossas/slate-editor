import React from 'react'
import keycode from 'keycode'
import classnames from 'classnames'

import { fontSizeStrategy } from './FontSizeUtils'
// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./FontSizeInput.css')

//
// It needs to check out how solve the warning below:
//
// warning.js:36 Warning: FontSizeInput is changing an uncontrolled input of
// type number to be controlled. Input elements should not switch from uncontrolled
// to controlled (or vice versa). Decide between using a controlled or uncontrolled
// input element for the lifetime of the component.
// More info: https://fb.me/react-controlled-components
//
const FontSizeInput = ({
  state,
  onChange,
  className,
  style,
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
      className={classnames('slate-font-size-plugin-input', className)}
      style={style}
      type="number"
      value={fontSizeState}
      min="1"
    />
  )
}

export default FontSizeInput
