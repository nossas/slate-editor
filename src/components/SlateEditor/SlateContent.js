import React from 'react'
import classnames from 'classnames'
import { Editor } from 'slate'


export default props => {
  const { className, state, outerState, plugins, onChange, changeState } = props
  const { readOnly } = outerState

  return (
    <div className={classnames("editor--content", className)}>
      <Editor
        plugins={plugins}
        state={state}
        onChange={onChange}
        readOnly={readOnly}
        changeState={changeState}
        outerState={outerState}
      />
    </div>
  )
}
