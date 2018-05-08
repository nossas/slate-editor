import React from 'react'
import FontAwesome from 'react-fontawesome'
import beautify from 'json-beautify'
import { Button } from '@slate-editor/components'

const StateLoggerButton = ({ value, onChange, className, style, type }) => (
  <div>
    <Button
      className={className}
      style={style}
      type={type}
      onClick={e => {
        e.preventDefault()
        console.groupCollapsed('[State Logger]')
        console.info('State', beautify(value, null, 2, 100))
        console.info('State Serialized', beautify(value.toJS(), null, 2, 100))
        console.groupEnd()
      }}
    >
      <FontAwesome name='code' style={{ marginRight: 5 }} />
      State Logger
    </Button>
  </div>
)

export default StateLoggerButton
