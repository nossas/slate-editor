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

<h1 align="center">@slate-editor/grid-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) grid plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/grid-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/grid-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/grid-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/grid-plugin)

</div>

## Installation
The **@slate-editor/grid-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/grid-plugin).

```
yarn add @slate-editor/grid-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { GridPlugin, GridButtonBar } from '@slate-editor/grid-plugin'

const plugins = [
  GridPlugin()
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <GridButtonBar />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## Keyboard Shortcut

| OS                       | Action    | Shortcut                                     |
|--------------------------|-----------|----------------------------------------------|
| ![Apple Logo][apple]     | Add Grid  | <kbd>⌘</kbd> + <kbd>^</kbd> + <kbd>g</kbd>   |
| ![Apple Logo][apple]     | Split Row | <kbd>⌘</kbd> + <kbd>^</kbd> + <kbd>r</kbd>   |
| ![Windows Logo][windows] | Add Grid  | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>g</kbd> |
| ![Windows Logo][windows] | Split Row | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>r</kbd> |

## API

| Name                 | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| GridNode             | Component that holds the html that will render the content with grid style. |
| GridRowNode          | Component that holds the html that will render the grid row.                |
| GridCellNode         | Component that holds the html that will render the grid cell.               |
| GridKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.   |
| GridUtils            | Generic file that holds the util common functions.                          |
| GridButtonBar        | Component that holds all action buttons to handle the grid behaviour.       |
| GridButton           | Component that handle behaviour to wrap content with grid style.            |
| GridSplitRowButton   | Component that handle behaviour to split rows into the grid.                |

## TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
