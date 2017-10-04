import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { splitRow } from './GridUtils'

const GridSplitRowButton = ({ state, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(splitRow(state.change()))}
    className={classnames('slate-grid-plugin--button', className)}
  >
    <FontAwesome name="level-down" />
  </Button>
)

export default GridSplitRowButton
