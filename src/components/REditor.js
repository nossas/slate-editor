import React, { Component } from 'react';
import { Editor, Raw } from 'slate';

import MarkHotkey, { Bold } from './MarkHotkey';
import InsertImage, { Image } from './InsertImage';


const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.'
        }
      ]
    }
  ]
}, { terse: true })


const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
]

const schema = {
  marks: {
    bold: Bold,
  },
  nodes: {
    image: Image,
  }
}


class REditor extends Component {

  constructor(props) {
    super(props);
    this.state = { state: initialState };
  }

  onChange(state) {
    this.setState({ state });
  }

  showLogState(e) {
    e.preventDefault();
    console.info('RawState SlateJS', Raw.serialize(this.state.state));
  }

  /*onDocumentChange(document, state) {
    const blocks = document.getBlocks()
    const last = blocks.last()
    if (last.type != 'image') return

    const normalized = state
      .transform()
      .collapseToEndOf(last)
      .splitBlock()
      .setBlock({
        type: 'paragraph',
        isVoid: false,
        data: {}
      })
      .apply({
        save: false
      })

    this.onChange(normalized)
  }*/

  render() {

    return (
      <div>
        <div className="toolbar">
          <InsertImage state={this.state.state} onChange={this.onChange.bind(this)} />
        </div>
        <div className="editor">
          <Editor
            schema={schema}
            plugins={plugins}
            state={this.state.state}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <button onClick={this.showLogState.bind(this)}>LOG State</button>
      </div>
    );
  }
}

export default REditor;
