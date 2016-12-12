import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Raw } from 'slate'
import beautify from 'json-beautify'


const LinkButton = ({ state, onChange, className, style }) => (
  <div>
    <button
      className={className}
      style={style}
      onMouseDown={e => {
        e.preventDefault()
        console.info('RawState SlateJS', Raw.serialize(state))
        console.info('Raw.serialize(state)', beautify(Raw.serialize(state), null, 2, 100))
      }}
    >
      <FontAwesome name="code" style={{ marginRight: 5 }} />
      State Logger
    </button>
  </div>
)

export default LinkButton
