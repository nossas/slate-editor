import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'

import { Button} from '../../components/button'
import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'


const AlignmentCenterButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(alignmentMarkStrategy(value.change(), 'center'))}
    className={classnames(
      'slate-alignment-plugin--button',
      { active: hasMark(value) && getMark(value).data.get('align') === 'center' },
      className,
    )}
  >
    <FontAwesome name="align-center" />
  </Button>
)

export default AlignmentCenterButton
