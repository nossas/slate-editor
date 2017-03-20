import React from 'react'

import { AlignmentLeftButton, AlignmentCenterButton, AlignmentRightButton } from './'
// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./AlignmentButtonBar.css')


const AlignmentButtonBar = props => (
  <div className="slate-alignment-plugin--button-bar">
    <AlignmentLeftButton {...props} />
    <AlignmentCenterButton {...props} />
    <AlignmentRightButton {...props} />
  </div>
)

export default AlignmentButtonBar
