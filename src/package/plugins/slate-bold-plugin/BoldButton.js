import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { boldMarkStrategy, hasMark } from './BoldUtils'


const BoldButton = ({ state, onChange, changeState, className, style }) => (
  <Button
    style={style}
    onClick={e => onChange(boldMarkStrategy(state))}
    className={classnames(
      'slate-bold-plugin--button',
      { active: hasMark(state) },
      className,
    )}
  >
    <FontAwesome name="bold" />
  </Button>
)

export default BoldButton
