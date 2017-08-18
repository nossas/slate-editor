import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { underlineMarkStrategy, hasMark } from './UnderlineUtils'

const UnderlineButton = ({ state, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(underlineMarkStrategy(state))}
    className={classnames(
      'slate-underline-plugin--button',
      { active: hasMark(state) },
      className
    )}
  >
    <FontAwesome name="underline" />
  </Button>
)

export default UnderlineButton
