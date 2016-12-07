import React from 'react'
import classnames from 'classnames'
import { Editor } from 'slate'


export default props => {

  const { className, state: { editorState, readOnly }, plugins, onChange } = props

  return (
    <div className={classnames("editor--content", className)}>
      <Editor
        plugins={plugins}
        state={editorState}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
}
