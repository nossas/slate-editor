import React from 'react'
import classnames from 'classnames'
import { Editor } from 'slate'


export default props => {

  const { className, state, plugins, onChange } = props

  return (
    <div className={classnames("editor--content", className)}>
      <Editor
        plugins={plugins}
        state={state}
        onChange={onChange}
      />
    </div>
  )
}
