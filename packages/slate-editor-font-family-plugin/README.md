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

<h1 align="center">@slate-editor/font-family-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) font family plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/font-family-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/font-family-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/font-family-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/font-family-plugin)

</div>

## Installation
The **@slate-editor/font-family-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/font-family-plugin).

```
yarn add @slate-editor/font-family-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { FontFamilyPlugin, FontFamilyDropdown } from '@slate-editor/font-family-plugin'

const plugins = [
  FontFamilyPlugin()
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <FontFamilyDropdown />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## API

| Name                       | Description                                                                      |
|----------------------------|----------------------------------------------------------------------------------|
| FontFamilyMark             | Component that holds the html that will wrap the content with font family style. |
| FontFamilyUtils            | Generic file that holds the util common functions.                               |
| FontFamilyButton           | Button component that have behaviour to wrap content with font family style.     |
| FontFamilyKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.        |

## TODO

- Make accepts keyboard shortcuts?;
- Add keyboard shortcut to apply font family to expanded selection;
- Add keyboard shortcut to remove font family from expanded selection;
- Add button to apply font family to expanded selection;
- Add button to remove font family from expanded selection;
- Add handle to manipulates collapsed selection to remove font family to anchor word;
- Add behaviour to show which font family have applied to collapsed selection;
- Add behaviour to show which font family have applied to expanded selection;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
