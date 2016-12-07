import React from 'react'
import classnames from 'classnames'
import Utils from './Utils'


export default props => {

  let { children, className, state, onChange } = props

  return (
    <div className={classnames("editor--toolbar", className)}>
      {Utils.cloneElement(children, { state, onChange })}
    </div>
  )
}
