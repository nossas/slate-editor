import React, { Component, PropTypes } from 'react';
import { Editor, Raw } from 'slate';

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


class REditor extends Component {

  constructor(props) {
    super(props);
    this.state = { editorState: initialState };
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  render() {

    return (
      <Editor
        state={this.state.editorState}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

export default REditor;
