import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { appendGrid, splitRow, hasGrid } from './GridUtils'
import './GridButton.css'


const GridButton = ({ state, onChange, changeState, className, style }) => (
  <div className="slate-grid-plugin--button-bar">
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

    <button
      style={style}
      onClick={e => onChange(splitRow(state))}
      className={classnames('slate-grid-plugin--button', className)}
    >
      <FontAwesome name="level-down" />
    </button>
  </div>
)

export default GridButton
