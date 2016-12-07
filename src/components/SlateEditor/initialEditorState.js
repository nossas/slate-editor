import { Raw } from 'slate'


const editorState = {
  nodes: [
    {
      data: {},
      kind: 'block',
      isVoid: false,
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          ranges: [ { kind: 'range', text: 'A Hello line of text in a paragraph. ', marks: [] } ]
        },
        {
          data: { href: 'google.com' },
          kind: 'inline',
          isVoid: false,
          type: 'link',
          nodes: [
            { kind: 'text', ranges: [ { kind: 'range', text: 'Hello', marks: [] } ] },
            {
              data: {
                src: 'https://orig06.deviantart.net/7869/f/2009/131/9/e/zubat_icon_by_the_fry_bat.gif'
              },
              kind: 'inline',
              isVoid: true,
              type: 'image',
              nodes: [
                { kind: 'text', ranges: [ { kind: 'range', text: ' ', marks: [] } ] }
              ]
            },
            { kind: 'text', ranges: [ { kind: 'range', text: 'World', marks: [] } ] }
          ]
        },
        { kind: 'text', ranges: [ { kind: 'range', text: '', marks: [] } ] }
      ]
    }
  ]
}

export default Raw.deserialize(editorState, { terse: true })
