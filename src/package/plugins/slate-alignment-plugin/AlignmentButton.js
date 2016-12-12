import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'
import './AlignmentButton.css'


const AlignmentButton = ({ state, onChange, changeState, className, style }) => (
  <div className="slate-alignment-plugin--buttons-bar">
    <button
      style={style}
      onClick={e => onChange(alignmentMarkStrategy(state, 'left'))}
      className={classnames(
        'slate-alignment-plugin--button',
        { active: hasMark(state) && getMark(state).data.get('align') === 'left' },
        className,
      )}
    >
      <FontAwesome name="align-left" />
    </button>

    <button
      style={style}
      onClick={e => onChange(alignmentMarkStrategy(state, 'center'))}
      className={classnames(
        'slate-alignment-plugin--button',
        { active: hasMark(state) && getMark(state).data.get('align') === 'center' },
        className,
      )}
    >
      <FontAwesome name="align-center" />
    </button>

    <button
      style={style}
      onClick={e => onChange(alignmentMarkStrategy(state, 'right'))}
      className={classnames(
        'slate-alignment-plugin--button',
        { active: hasMark(state) && getMark(state).data.get('align') === 'right' },
        className,
      )}
    >
      <FontAwesome name="align-right" />
    </button>
  </div>
)

export default AlignmentButton
