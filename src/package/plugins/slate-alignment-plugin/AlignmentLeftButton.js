import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'

import { Button} from '../../components/button'
import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'


const AlignmentLeftButton = ({ state, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(alignmentMarkStrategy(state, 'left'))}
    className={classnames(
      'slate-alignment-plugin--button',
      { active: hasMark(state) && getMark(state).data.get('align') === 'left' },
      className,
    )}
  >
    <FontAwesome name="align-left" />
  </Button>
)

export default AlignmentLeftButton
