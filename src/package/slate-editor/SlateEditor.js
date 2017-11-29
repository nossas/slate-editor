import React, { Component } from 'react'
import classnames from 'classnames'
import { cloneElement } from '../utils/react'
import { isFunction } from '../utils/type-check'

import initialEditorState from './initialEditorState'

class SlateEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.initialState || initialEditorState,
      readOnly: false,
      uid: new Date().getUTCMilliseconds()
    }
  }

  //
  // This function change only the Editor value object
  //
  onChange (change) {
    const value = change.value

    this.setState({ value })

    const { onChange } = this.props
    if (isFunction(onChange)) onChange(value)
  }

  //
  // This function change the SlateEditor state object.
  // It can be change the Editor value object too...
  //
  changeState (state) {
    this.setState(state)
  }

  render () {
    const { children, style, className, plugins } = this.props

    const childProps = {
      plugins,
      value: this.state.value,
      outerState: this.state,
      onChange: this.onChange.bind(this),
      changeState: this.changeState.bind(this)
    }

    return (
      <div className={classnames('editor--root', className)} style={style}>
        {cloneElement(children, childProps)}
      </div>
    )
  }
}

export default SlateEditor
