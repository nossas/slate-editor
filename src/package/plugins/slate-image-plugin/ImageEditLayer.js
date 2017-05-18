import React from 'react'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageEditLayer.css')

const ImageEditLayer = ({ changeModalState, text }) => (
  <div className="image-node--image-edit-layer" onClick={() => changeModalState(true)}>
    <button className="image-node--image-edit-button" onClick={() => changeModalState(true)}>
      {text}
    </button>
  </div>
)

export default ImageEditLayer
