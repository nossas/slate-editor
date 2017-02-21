import React from 'react'

import { GridButton, GridSplitRowButton } from './'
// FIXME: Needs to handle assets files to work with SSR
if (process.env.REACT_APP_BROWSER || process.env.BROWSER) require('./GridButtonBar.css')


const GridButtonBar = props => (
  <div className="slate-grid-plugin--button-bar">
    <GridButton {...props} />
    <GridSplitRowButton {...props} />
  </div>
)

export default GridButtonBar
