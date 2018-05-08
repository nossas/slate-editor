import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import { Button } from '@slate-editor/components'

import { appendGrid, hasGrid } from './GridUtils'

const GridButton = ({ value, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(appendGrid(value.change()))}
    className={classnames(
      'slate-grid-plugin--button',
      { active: hasGrid(value) },
      className,
    )}
  >
    <FontAwesome name="th" />
  </Button>
)

export default GridButton
