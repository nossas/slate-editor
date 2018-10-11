import PropTypes from 'prop-types';
import React from 'react';
import Draggable from 'react-draggable'
import { SketchPicker } from 'react-color'

import { colorMarkStrategy, hasMark, getMark } from './ColorUtils'
// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./DraggableColorPicker.css')


const DraggableColorPicker = ({
  value,
  changeState,
  outerState: {
    color: { showPicker },
  },
  pickerDefaultPosition,
}) => {
  let rgba = { r:0, g:0, b:0, a:1 }
  if (hasMark(value)) {
    rgba = getMark(value).data.get('rgba')
  }
  
  return (
    <Draggable
      handle=".slate-color-plugin--draggable-handle"
      defaultPosition={pickerDefaultPosition}
      zIndex={100}
    >
      <div className="slate-color-plugin--draggable-handle-container">
        <div className="slate-color-plugin--draggable-handle" />
        <SketchPicker
          color={rgba}
          onChangeComplete={color => {
            const rgbaChange = color.rgb
            changeState({
              value: colorMarkStrategy({ value, rgba: rgbaChange }).value,
              color: { rgba: rgbaChange, showPicker },
            })
          }}
        />
      </div>
    </Draggable>
  )
}

DraggableColorPicker.propTypes = {
  value: PropTypes.object.isRequired,
  changeState: PropTypes.func.isRequired,
  outerState: PropTypes.shape({
    color: PropTypes.shape({
      showPicker: PropTypes.bool.isRequired,
      rgba: PropTypes.shape({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        a: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  }).isRequired,
}

export default DraggableColorPicker
