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

<h1 align="center">@slate-editor/font-size-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) font size plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/font-size-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/font-size-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/font-size-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/font-size-plugin)

</div>

## Installation
The **@slate-editor/font-size-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/font-size-plugin).

```
yarn add @slate-editor/font-size-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { FontSizePlugin, FontSizeInput } from '@slate-editor/font-size-plugin'

const fontSizePluginOptions = { initialFontSize: 16 }

const plugins = [
  FontSizePlugin(fontSizePluginOptions)
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <FontSizeInput {...fontSizePluginOptions} />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## Keyboard Shortcut

| OS                       | Action   | Shortcut       |
|--------------------------|----------|----------------|
| ![Apple Logo][apple]     | Increase | <kbd>⌘</kbd>+<kbd>shift</kbd>+<kbd>></kbd>     |
| ![Apple Logo][apple]     | Decrease | <kbd>⌘</kbd>+<kbd>shift</kbd>+<kbd><</kbd>     |
| ![Windows Logo][windows] | Increase | <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>></kbd>  |
| ![Windows Logo][windows] | Decrease | <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd><</kbd>  |

## API

| Name                       | Description                                                                    |
|----------------------------|--------------------------------------------------------------------------------|
| FontSizeMark               | Component that holds the html that will wrap the content with font size style. |
| FontSizeKeyboardShortcut   | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.      |
| FontSizeUtils              | Generic file that holds the util common functions.                             |
| FontSizeInput              | Input component that have behaviour to wrap content with font size style.      |

## TODO

- Make keyboard shortcut accepts customization;
- Add keyboard shortcut to apply font size to expanded selection;
- Add keyboard shortcut to remove font size from expanded selection;
- Add button to apply font size to expanded selection;
- Add button to remove font size from expanded selection;
- Add handle to manipulates collapsed selection to remove font size to anchor word;
- Add behaviour to show which font size have applied to collapsed selection;
- Add behaviour to show which font size have applied to expanded selection;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
