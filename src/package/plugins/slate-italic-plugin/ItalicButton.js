import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { italicMarkStrategy, hasMark } from './ItalicUtils'


const ItalicButton = ({ state, onChange, className, style }) => (
  <Button
    style={style}
    onClick={e => onChange(italicMarkStrategy(state))}
    className={classnames(
      'slate-italic-plugin--button',
      { active: hasMark(state) },
      className,
    )}
  >
    <FontAwesome name="italic" />
  </Button>
)

export default ItalicButton
