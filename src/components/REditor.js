import React, { Component } from 'react';
import { Editor, Raw } from 'slate';

import MarkHotkey, { Bold } from './MarkHotkey';
import ImagePlugin, { InsertImageButton } from './ImagePlugin';

import './assets/css/font-awesome.css';


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
  ImagePlugin(),
]

const schema = {
  marks: {
    bold: Bold,
  },
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

  render() {

    return (
      <div className="editor--root">
        <div className="editor--toolbar">
          <InsertImageButton state={this.state.state} onChange={this.onChange.bind(this)} />
        </div>
        <div className="editor--content">
          <Editor
            schema={schema}
            plugins={plugins}
            state={this.state.state}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <div className="editor--footer">
          <button onClick={this.showLogState.bind(this)}>LOG State</button>
        </div>
      </div>
    );
  }
}

export default REditor;
