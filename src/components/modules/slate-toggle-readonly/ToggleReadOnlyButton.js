import React from 'react'
import FontAwesome from 'react-fontawesome'


const ToggleReadOnlyButton = ({ state: { editorState, readOnly }, onChange }) => (
  <button
    onClick={e => {
      e.preventDefault()
      onChange({ editorState, readOnly: !readOnly })
    }}
  >
    <FontAwesome name={readOnly ? 'toggle-on' : 'toggle-off'} style={{ marginRight: 5 }} />
    Toggle readOnly
  </button>
)

export default ToggleReadOnlyButton
