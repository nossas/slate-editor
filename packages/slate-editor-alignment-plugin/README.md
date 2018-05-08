<div align="center">
  <a href="https://www.en.nossas.org" rel="noopener" target="_blank">
    <img
      width="200"
      src="https://s3.amazonaws.com/hub-central/uploads/logo-nossas-20170517185909.svg"
      alt="Nossas logo"
      title="Nossas"
    />
  </a>
</div>
<div align="center">
  <img
    src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg"
    alt="Nossas Cidades logo"
    title="Nossas Cidades"
    height="50"
  />
</div>

<h1 align="center">@slate-editor/alignment-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) alignment plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/alignment-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/alignment-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/alignment-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/alignment-plugin)

</div>

## Installation
The **@slate-editor/alignment-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/alignment-plugin).

```sh
yarn add @slate-editor/alignment-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { AlignmentPlugin, AlignmentButtonBar } from '@slate-editor/alignment-plugin'

const plugins = [
  AlignmentPlugin()
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <AlignmentButtonBar />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## Keyboard Shortcut

| OS                       | Action       | Shortcut                                          |
|--------------------------|--------------|---------------------------------------------------|
| ![Apple Logo][apple]     | Align Left   | <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>l</kbd>    |
| ![Apple Logo][apple]     | Align Center | <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>c</kbd>    |
| ![Apple Logo][apple]     | Align Right  | <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>r</kbd>    |
| ![Windows Logo][windows] | Align Left   | <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>l</kbd>  |
| ![Windows Logo][windows] | Align Center | <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>c</kbd>  |
| ![Windows Logo][windows] | Align Right  | <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>r</kbd>  |

## API

| Name                      | Description                                                                    |
|---------------------------|--------------------------------------------------------------------------------|
| AlignmentNode             | Component that holds the html that will wrap the content with alignment style. |
| AlignmentUtils            | Generic file that holds the util common functions.                             |
| AlignmentButtonBar        | Component that holds all action buttons to handle the alignment behaviour.     |
| AlignmentLeftButton       | Component that holds button to handle the left alignment behaviour.            |
| AlignmentCenterButton     | Component that holds button to handle the center alignment behaviour.          |
| AlignmentRightButton      | Component that holds button to handle the right alignment behaviour.           |
| AlignmentKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.      |

## TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
