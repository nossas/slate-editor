import React from 'react'
import { Button } from '@slate-editor/components'

// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ImageEditLayer.css')

const ImageEditLayer = ({ changeModalState, text }) => (
  <div className="image-node--image-edit-layer" onClick={() => changeModalState(true)}>
    <Button className="image-node--image-edit-button" onClick={() => changeModalState(true)}>
      {text}
    </Button>
  </div>
)

export default ImageEditLayer
