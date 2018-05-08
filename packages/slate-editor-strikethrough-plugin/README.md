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

<h1 align="center">@slate-editor/strikethrough-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) strikethrough plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/strikethrough-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/strikethrough-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/strikethrough-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/strikethrough-plugin)

</div>

## Installation
The **@slate-editor/strikethrough-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/strikethrough-plugin).

```
yarn add @slate-editor/strikethrough-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { StrikethroughPlugin, StrikethroughButton } from '@slate-editor/strikethrough-plugin'

const plugins = [
  StrikethroughPlugin()
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <StrikethroughButton />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## Keyboard Shortcut

| OS                       | Shortcut                                        |
|--------------------------|-------------------------------------------------|
| ![Apple Logo][apple]     | <kbd>⌘</kbd> + <kbd>^</kbd> + <kbd>s</kbd>      |
| ![Windows Logo][windows] | <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>s</kbd> |

## API

| Name                          | Description                                                                        |
|-------------------------------|------------------------------------------------------------------------------------|
| StrikethroughMark             | Component that holds the html that will wrap the content with strikethrough style. |
| StrikethroughKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.          |
| StrikethroughUtils            | Generic file that holds the util common functions.                                 |
| StrikethroughButton           | Button component that have behaviour to wrap content with strikethrough style.     |

## TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
