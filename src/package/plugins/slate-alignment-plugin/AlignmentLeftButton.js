import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'

import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'


const AlignmentLeftButton = ({ state, onChange, changeState, className, style }) => (
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
)

export default AlignmentLeftButton
