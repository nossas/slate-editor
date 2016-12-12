import React from 'react'

import { GridButton, GridSplitRowButton } from './'
import './GridButtonBar.css'


const GridButtonBar = props => (
  <div className="slate-grid-plugin--button-bar">
    <GridButton {...props} />
    <GridSplitRowButton {...props} />
  </div>
)

export default GridButtonBar
