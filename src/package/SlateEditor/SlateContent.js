import React from 'react'
import classnames from 'classnames'
import { Editor } from 'slate'

export default ({
  className,
  wrapperStyle,
  style,
  state,
  outerState,
  plugins,
  onChange,
  changeState,
  children
}) => {
  const { readOnly } = outerState

  return (
    <div className={classnames('editor--content', className)} style={wrapperStyle}>
      <Editor
        plugins={plugins}
        state={state}
        onChange={onChange}
        readOnly={readOnly}
        changeState={changeState}
        outerState={outerState}
        style={style}
      />
      {children}
    </div>
  )
}
