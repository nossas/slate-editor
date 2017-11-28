import React from 'react'
import classnames from 'classnames'
import { Editor } from 'slate-react'

export default ({
  className,
  wrapperStyle,
  style,
  value,
  outerState,
  plugins,
  onChange,
  changeState,
  children,
  ...rest
}) => {
  const { readOnly } = outerState

  return (
    <div className={classnames('editor--content', className)} style={wrapperStyle}>
      <Editor
        plugins={plugins}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        changeState={changeState}
        outerState={outerState}
        style={style}
        renderNode={renderNode}
        {...rest}
      />
      {children}
    </div>
  )
}
