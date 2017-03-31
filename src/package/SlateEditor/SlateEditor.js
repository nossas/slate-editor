import React, { Component } from 'react'
import classnames from 'classnames'
import Utils from './Utils'

import initialEditorState from './initialEditorState'

class SlateEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state: props.initialState || initialEditorState,
      readOnly: false,
      uid: new Date().getUTCMilliseconds()
    }
  }

  onChange (state) {
    this.setState({ state })
  }

  changeState (state) {
    //
    // The `setTimeout` function is need to prevent the warning below:
    //
    // Warning: setState(...): Cannot update during an existing state transition
    // (such as within `render` or another component's constructor). Render methods
    // should be a pure function of props and state; constructor side-effects are
    // an anti-pattern, but can be moved to `componentWillMount`.
    //
    // It needs to check a better way to solve the case to update "outerState"
    // inside the SlateJS node component.
    //
    setTimeout(() => { this.setState(state) }, 0)
  }

  render () {
    const { children, style, className, plugins } = this.props

    const childProps = {
      plugins,
      state: this.state.state,
      outerState: this.state,
      onChange: this.onChange.bind(this),
      changeState: this.changeState.bind(this)
    }

    return (
      <div className={classnames('editor--root', className)} style={style}>
        {Utils.cloneElement(children, childProps)}
      </div>
    )
  }
}

export default SlateEditor
