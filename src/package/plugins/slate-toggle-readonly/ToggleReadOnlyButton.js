import React from 'react'
import FontAwesome from 'react-fontawesome'

import { Button} from '../../components/button'

const ToggleReadOnlyButton = ({ state, outerState: { readOnly }, onChange, changeState, className, style, type }) => (
  <Button
    className={className}
    style={style}
    type={type}
    onClick={e => changeState({ state, readOnly: !readOnly })}
  >
    <FontAwesome name={readOnly ? 'toggle-on' : 'toggle-off'} style={{ marginRight: 5 }} />
    Read Only
  </Button>
)

export default ToggleReadOnlyButton
