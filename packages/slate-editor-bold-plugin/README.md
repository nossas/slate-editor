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

<h1 align="center">@slate-editor/bold-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) bold plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/bold-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/bold-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/bold-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/bold-plugin)

</div>

## Installation
The **@slate-editor/bold-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/bold-plugin).

```
yarn add @slate-editor/bold-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { BoldPlugin, BoldButtonBar } from '@slate-editor/bold-plugin'

const plugins = [
  BoldPlugin()
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <BoldButtonBar />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## Keyboard Shortcut

| OS                       | Shortcut |
|--------------------------|----------|
| ![Apple Logo][apple]     | `⌘`+`b`  |
| ![Windows Logo][windows] | `^`+`b`  |

## API

| Name                 | Description                                                               |
|----------------------|---------------------------------------------------------------------------|
| BoldMark             | Component that holds the html that will wrap the content with bold style. |
| BoldUtils            | Generic file that holds the util common functions.                        |
| BoldButton           | Button component that have behaviour to wrap content with bold style.     |
| BoldKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS. |

## TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
