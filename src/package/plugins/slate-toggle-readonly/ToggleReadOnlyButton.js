import React from 'react'
import FontAwesome from 'react-fontawesome'


const ToggleReadOnlyButton = ({
  state,
  outerState: { readOnly },
  onChange,
  changeState,
  className,
  style,
}) => (
  <button
    className={className}
    style={style}
    onClick={e => changeState({ state, readOnly: !readOnly })}
  >
    <FontAwesome name={readOnly ? 'toggle-on' : 'toggle-off'} style={{ marginRight: 5 }} />
    Read Only
  </button>
)

export default ToggleReadOnlyButton
