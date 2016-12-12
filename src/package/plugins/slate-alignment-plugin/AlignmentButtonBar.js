import React from 'react'

import { AlignmentLeftButton, AlignmentCenterButton, AlignmentRightButton } from './'
import './AlignmentButtonBar.css'


const AlignmentButtonBar = props => (
  <div className="slate-alignment-plugin--button-bar">
    <AlignmentLeftButton {...props} />
    <AlignmentCenterButton {...props} />
    <AlignmentRightButton {...props} />
  </div>
)

export default AlignmentButtonBar
