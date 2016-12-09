import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import DraggableColorPicker from './DraggableColorPicker'
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

    const { showPicker } = color

    return (
      <div className="slate-color-plugin--toolbar">
        <button
          className="slate-color-plugin--button"
          data-active={showPicker}
          onClick={e => {
            e.preventDefault()
            changeState({ state, color: { ...color, showPicker: !showPicker } })
          }}
        >
          <FontAwesome name="eyedropper" />
        </button>
        {showPicker && <DraggableColorPicker {...this.props} />}
      </div>
    )
  }
}

export default ColorButton
