import React, { Component } from 'react'
import classnames from 'classnames'
import Utils from './Utils'

import initialEditorState from './initialEditorState'
import '../assets/css/font-awesome.css'


class SlateEditor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: initialEditorState,
      readOnly: false
    }
  }

  onChange(state) {
    this.setState(state)
  }

  render() {

    const { children, className, plugins } = this.props

    const childProps = {
      plugins,
      state: this.state,
      onChange: this.onChange.bind(this)
    }

    return (
      <div className={classnames("editor--root", className)}>
        {Utils.cloneElement(children, childProps)}
      </div>
    )
  }
}

export default SlateEditor
