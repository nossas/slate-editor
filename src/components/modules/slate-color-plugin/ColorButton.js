import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { SketchPicker } from 'react-color'

import { colorMarkStrategy } from './ColorUtils'
import './ColorButton.css'

class ColorButton extends Component {
  componentWillMount() {
    const { changeState, outerState: { color }, initialState } = this.props

    // Set initial state received as a prop
    if (!color) changeState({ color: initialState })
  }

  render() {
    const { state, changeState, outerState: { color } } = this.props

    // If still does not have the initial state, do not render button.
    if (!color) return null

    const { showPicker, rgba } = color

    return (
      <div className="slate-color-plugin--toolbar">
        <button
          onClick={e => {
            e.preventDefault()
            changeState({ state, color: { ...color, showPicker: !showPicker } })
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
  }
}

export default ColorButton
