import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'

import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'


const AlignmentCenterButton = ({ state, onChange, changeState, className, style }) => (
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
)

export default AlignmentCenterButton
