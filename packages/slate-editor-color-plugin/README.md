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

<h1 align="center">@slate-editor/color-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) color plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/color-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/color-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/color-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/color-plugin)

</div>

## Installation
The **@slate-editor/color-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/color-plugin).

```
yarn add @slate-editor/color-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { ColorPlugin, ColorButton, ColorStateModel } from '@slate-editor/color-plugin'

const colorPluginOptions = new ColorStateModel().rgba({ r: 100, g: 100, b: 100, a: 1 }).gen()

const plugins = [
  ColorPlugin()
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <ColorButton
        initialState={colorPluginOptions}
        pickerDefaultPosition={{ x: -520, y: 17 }}
      />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## Keyboard Shortcut

| OS                       | Action              | Shortcut                                     |
|--------------------------|---------------------|----------------------------------------------|
| ![Apple Logo][apple]     | Toggle Color Picker | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>l</kbd> |
| ![Windows Logo][windows] | Toggle Color Picker | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>l</kbd> |

## API

| Name                  | Description                                                                |
|-----------------------|----------------------------------------------------------------------------|
| ColorMark             | Component that holds the html that will wrap the content with color style. |
| ColorUtils            | Generic file that holds the util common functions.                         |
| ColorButton           | Button component that have behaviour to wrap content with color style.     |
| ColorKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.  |
| ColorStateModel       | Class that knows the state structure of the plugin                         |

## TODO

- Make keyboard shortcut accepts customization;
- Add keyboard shortcut to apply color to expanded selection;
- Add keyboard shortcut to remove color from expanded selection;
- Add button to apply color to expanded selection;
- Add button to remove color from expanded selection;
- Add handle to manipulates collapsed selection to remove color to anchor word;
- Add behaviour to show which color have applied to collapsed selection;
- Add behaviour to show which color have applied to expanded selection;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
