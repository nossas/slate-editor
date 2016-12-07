import React, { Component } from 'react'
import { Editor, Raw } from 'slate'

import BoldPlugin, { BoldButton } from '../../modules/slate-bold-plugin'
import ItalicPlugin, { ItalicButton } from '../../modules/slate-italic-plugin'
import ImagePlugin, { ImageButton } from '../../modules/slate-image-plugin'
import LinkPlugin, { LinkButton } from '../../modules/slate-link-plugin'
import StateLoggerButton from '../../modules/slate-state-logger/StateLoggerButton'

// import { ToggleEditableButton } from './Editor'

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


const plugins = [
  BoldPlugin(),
  ItalicPlugin(),
  ImagePlugin(),
  LinkPlugin(),
]


class SlateEditor extends Component {

  constructor(props) {
    super(props)
    this.state = { state: initialState }
  }

  onChange(state) {
    this.setState({ state })
  }

  render() {
    const commonProps = {
      state: this.state.state,
      onChange: this.onChange.bind(this)
    }

    return (
      <div className="editor--root">
        <div className="editor--toolbar">
          <BoldButton {...commonProps} />
          <ItalicButton {...commonProps} />
          <ImageButton {...commonProps} />
          <LinkButton {...commonProps} />
        </div>

        <div className="editor--content">
          <Editor
            plugins={plugins}
            state={this.state.state}
            onChange={this.onChange.bind(this)}
          />
        </div>

        <div className="editor--footer">
          <StateLoggerButton {...commonProps} />
        </div>
      </div>
    )
  }
}

export default SlateEditor
