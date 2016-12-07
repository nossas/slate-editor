import React, { Component } from 'react'
import classnames from 'classnames'
import { Raw } from 'slate'
import Utils from './Utils'

import '../assets/css/font-awesome.css'


const initialEditorState = Raw.deserialize({
  nodes: [
    {
      "data": {},
      "kind": "block",
      "isVoid": false,
      "type": "paragraph",
      "nodes": [
        {
          "kind": "text",
          "ranges": [ { "kind": "range", "text": "A Hello line of text in a paragraph. ", "marks": [] } ]
        },
        {
          "data": { "href": "google.com" },
          "kind": "inline",
          "isVoid": false,
          "type": "link",
          "nodes": [
            { "kind": "text", "ranges": [ { "kind": "range", "text": "Hello", "marks": [] } ] },
            {
              "data": {
                "src": "https://orig06.deviantart.net/7869/f/2009/131/9/e/zubat_icon_by_the_fry_bat.gif"
              },
              "kind": "inline",
              "isVoid": true,
              "type": "image",
              "nodes": [
                { "kind": "text", "ranges": [ { "kind": "range", "text": " ", "marks": [] } ] }
              ]
            },
            { "kind": "text", "ranges": [ { "kind": "range", "text": "World", "marks": [] } ] }
          ]
        },
        { "kind": "text", "ranges": [ { "kind": "range", "text": "", "marks": [] } ] }
      ]
    }
  ]
}, { terse: true })


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
