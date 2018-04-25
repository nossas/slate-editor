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

<h1 align="center">@slate-editor/link-plugin</h1>

<div align="center">

[SlateJS](https://github.com/ianstormtaylor/slate) link plugin.

[![npm package](https://img.shields.io/npm/v/@slate-editor/link-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/link-plugin)
[![npm downloads](https://img.shields.io/npm/dt/@slate-editor/link-plugin.svg?maxAge=60)](https://www.npmjs.com/package/@slate-editor/link-plugin)

</div>

## Installation
The **@slate-editor/link-plugin** is available as an [npm package](https://www.npmjs.com/package/@slate-editor/link-plugin).

```
yarn add @slate-editor/link-plugin
```

## Usage
Here is a quick example to get you started:

```js
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { LinkPlugin, LinkButton } from '@slate-editor/link-plugin'

const plugins = [
  LinkPlugin()
]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <LinkButton />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

## Keyboard Shortcut

| OS                       | Shortcut                    |
|--------------------------|-----------------------------|
| ![Apple Logo][apple]     | <kbd>⌘</kbd> + <kbd>k</kbd> |
| ![Windows Logo][windows] | <kbd>^</kbd> + <kbd>k</kbd> |

## API

| Name                 | Description                                                               |
|----------------------|---------------------------------------------------------------------------|
| LinkNode             | Component that holds the html that will wrap the content with link.       |
| LinkKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS. |
| LinkUtils            | Generic file that holds the util common functions.                        |
| LinkButton           | Button component that have behaviour to wrap content with link.           |

## TODO

- Make keyboard shortcut accepts customization;
- Add behaviour to catch onPaste command and identify if it is an url and ask if wants to link it;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
