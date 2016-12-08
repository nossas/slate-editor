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

    this.state = {
      state: initialState,
      readOnly: false,
      color: {
        showPicker: true,
        rgba: { r: 116, g: 19, b: 19, a: 1 },
      }
    }
  }

  onChange(state) {
    this.setState({ state })
  }

  changeState(state) {
    //
    // The `setTimeout` function is need to prevent the warning below:
    //
    // Warning: setState(...): Cannot update during an existing state transition
    // (such as within `render` or another component's constructor). Render methods
    // should be a pure function of props and state; constructor side-effects are
    // an anti-pattern, but can be moved to `componentWillMount`.
    //
    // It needs to check a better way to solve the case to update "outerState"
    // inside the SlateJS node component like `FontSizeNode`.
    //
    setTimeout(() => { this.setState(state) }, 0)
  }

  render() {

    const { children, className, plugins } = this.props

    const childProps = {
      plugins,
      state: this.state.state,
      outerState: this.state,
      onChange: this.onChange.bind(this),
      changeState: this.changeState.bind(this)
    }

    return (
      <div className={classnames("editor--root", className)}>
        {Utils.cloneElement(children, childProps)}
      </div>
    )
  }
}

export default SlateEditor
