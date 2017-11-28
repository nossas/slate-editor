import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { boldMarkStrategy, hasMark } from './BoldUtils'


const BoldButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(boldMarkStrategy(value.change()))}
    className={classnames(
      'slate-bold-plugin--button',
      { active: hasMark(value) },
      className,
    )}
  >
    <FontAwesome name="bold" />
  </Button>
)

export default BoldButton
