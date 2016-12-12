import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'

import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'


const AlignmentRightButton = ({ state, onChange, changeState, className, style }) => (
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
)

export default AlignmentRightButton
