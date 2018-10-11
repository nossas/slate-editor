import React from 'react'
import classnames from 'classnames'

import { fontSizeStrategy, hasMark, getMark } from './FontSizeUtils'
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
  value,
  className,
  style,
  changeState,
  initialFontSize
}) => {
  let fontSizeDefault = initialFontSize
  if (hasMark(value)) {
    fontSizeDefault = getMark(value).data.get('fontSize')
  }

  return (
    <input
      onChange={({ target: { value: fontSizeValue } }) => {
        if (Number(fontSizeValue) <= 0) fontSizeValue = '1'
        const fontSize = fontSizeValue || '1'
        const fontSizeState = fontSizeStrategy({
          change: value.change(),
          fontSize,
          changeState
        }).value
        changeState({ fontSize, value: fontSizeState })
      }}
      onFocus={e => e.target.select()}
      className={classnames('slate-font-size-plugin-input', className)}
      style={style}
      type="number"
      value={fontSizeDefault}
      min="1"
    />
  )
}

export default FontSizeInput
