import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { italicMarkStrategy, hasMark } from './ItalicUtils'

const ItalicButton = ({ state, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(italicMarkStrategy(state.change()))}
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
