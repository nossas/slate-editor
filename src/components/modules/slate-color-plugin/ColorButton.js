import React from 'react'
import FontAwesome from 'react-fontawesome'
import { SketchPicker } from 'react-color'

import { colorMarkStrategy } from './ColorUtils'
import './ColorButton.css'


const ColorButton = ({
  state,
  onChange,
  changeState,
  outerState: {
    color: { showPicker, rgba }
  },
}) => (
  <div className="slate-color-plugin--toolbar">
    <button
      onClick={e => {
        e.preventDefault()
        changeState({ state, color: { showPicker: !showPicker } })
      }}
      data-active={showPicker}
    >
      <FontAwesome name="eyedropper" />
    </button>
    {showPicker && (
      <SketchPicker
        color={rgba}
        onChangeComplete={color => {
          const rgbaChange = color.rgb
          changeState({
            state: colorMarkStrategy({ state, rgba: rgbaChange }),
            color: { rgba: rgbaChange, showPicker },
          })
        }}
      />
    )}
  </div>
)

export default ColorButton
