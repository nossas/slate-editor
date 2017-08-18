import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Raw } from 'slate'
import beautify from 'json-beautify'

import { Button} from '../../components/button'

const StateLoggerButton = ({ state, onChange, className, style, type }) => (
  <div>
    <Button
      className={className}
      style={style}
      type={type}
      onClick={e => {
        e.preventDefault()
        console.groupCollapsed('[State Logger]')
        console.info('State', beautify(state, null, 2, 100))
        console.info('State Serialized', beautify(Raw.serialize(state), null, 2, 100))
        console.info('State Serialized (Terse)', beautify(Raw.serialize(state, { terse: true }), null, 2, 100))
        console.groupEnd()
      }}
    >
      <FontAwesome name='code' style={{ marginRight: 5 }} />
      State Logger
    </Button>
  </div>
)

export default StateLoggerButton
