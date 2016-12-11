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
    onClick={e => {
      e.preventDefault()
      changeState({ state, readOnly: !readOnly })
    }}
  >
    <FontAwesome name={readOnly ? 'toggle-on' : 'toggle-off'} style={{ marginRight: 5 }} />
    Toggle readOnly
  </button>
)

export default ToggleReadOnlyButton
