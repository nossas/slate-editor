import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Raw } from 'slate'
import beautify from 'json-beautify'


const LinkButton = ({ state, onChange }) => (
  <div>
    <button
      onMouseDown={e => {
        e.preventDefault()
        console.info('RawState SlateJS', Raw.serialize(state))
        console.log('Raw.serialize(state)', beautify(Raw.serialize(state), null, 2, 100))
      }}
    >
      <FontAwesome name="code" style={{ marginRight: 5 }} />
      State Logger
    </button>
  </div>
)

export default LinkButton
