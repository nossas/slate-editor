import React, { Component } from 'react'
import classnames from 'classnames'
import { Raw } from 'slate'
import Utils from './Utils'

import '../assets/css/font-awesome.css'


const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        { kind: 'text', text: 'A line of text in a paragraph.' },
      ]
    }
  ]
}, { terse: true })


class SlateEditor extends Component {

  constructor(props) {
    super(props)

    this.state = { state: initialState }
  }

  onChange(state) {
    this.setState({ state })
  }

  render() {

    const { children, className, plugins } = this.props

    const childProps = {
      plugins,
      state: this.state.state,
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
