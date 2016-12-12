import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { appendGrid, hasGrid } from './GridUtils'


const GridButton = ({ state, onChange, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(appendGrid(state))}
    className={classnames(
      'slate-grid-plugin--button',
      { active: hasGrid(state) },
      className,
    )}
  >
    <FontAwesome name="th" />
  </button>
)

export default GridButton
