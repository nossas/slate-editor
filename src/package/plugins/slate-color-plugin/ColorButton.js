import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import DraggableColorPicker from './DraggableColorPicker'
// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ColorButton.css')

class ColorButton extends Component {
  componentWillMount() {
    const { changeState, outerState: { color }, initialState } = this.props

    // Set initial state received as a prop
    if (!color) changeState({ color: initialState })
  }

  render() {
    const { className, style, state, changeState, outerState: { color } } = this.props

    // If still does not have the initial state, do not render button.
    if (!color) return null

    const { showPicker } = color

    return (
      <div className="slate-color-plugin--toolbar">
        <button
          style={style}
          onClick={e => changeState({ state, color: { ...color, showPicker: !showPicker } })}
          className={classnames(
            'slate-color-plugin--button',
            className,
            { active: showPicker },
          )}
        >
          <FontAwesome name="eyedropper" />
        </button>
        {showPicker && <DraggableColorPicker {...this.props} />}
      </div>
    )
  }
}

export default ColorButton
