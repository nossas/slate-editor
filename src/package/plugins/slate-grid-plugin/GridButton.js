import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { appendGrid, hasGrid } from './GridUtils'


const GridButton = ({ state, onChange, className, style }) => (
  <Button
    style={style}
    onClick={e => onChange(appendGrid(state))}
    className={classnames(
      'slate-grid-plugin--button',
      { active: hasGrid(state) },
      className,
    )}
  >
    <FontAwesome name="th" />
  </Button>
)

export default GridButton
