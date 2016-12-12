import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { splitRow } from './GridUtils'

const GridSplitRowButton = ({ state, onChange, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(splitRow(state))}
    className={classnames('slate-grid-plugin--button', className)}
  >
    <FontAwesome name="level-down" />
  </button>
)

export default GridSplitRowButton
