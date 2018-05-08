<p align="center">
  <a href="https://www.en.nossas.org" rel="noopener" target="_blank">
    <img
      width="200"
      src="https://s3.amazonaws.com/hub-central/uploads/logo-nossas-20170517185909.svg"
      alt="Nossas logo"
      title="Nossas"
    />
  </a>
</p>

<h1 align="center">slate-editor</h1>

<div align="center">

A complete rich text editor based on [SlateJS](https://github.com/ianstormtaylor/slate) framework

[![npm package](https://img.shields.io/npm/v/slate-editor.svg?maxAge=60)](https://www.npmjs.com/package/slate-editor)
[![npm downloads](https://img.shields.io/npm/dt/slate-editor.svg?maxAge=60)](https://www.npmjs.com/package/slate-editor)
[![Licence](https://img.shields.io/github/license/nossas/slate-editor.svg?maxAge=60)](https://github.com/nossas/slate-editor/blob/master/LICENSE)

</div>

## Installation
The slate-editor is available as an [npm package](https://www.npmjs.com/package/slate-editor).

```sh
yarn add slate-editor
```

## Usage
You can use which plugin you want. No need to use [all plugins available](../).

In the example below we only add the **[bold](../slate-editor-bold-plugin)** plugin with its button in the toolbar.

**Basic example**
```jsx
import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { BoldPlugin, BoldButton } from '@slate-editor/bold-plugin'

const plugins = [BoldPlugin()]

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <BoldButton />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
)

export default SlateRichTextEditor
```

**Advanced example**

- Take a look at the [full working example](../slate-editor-example/src/example/pages/Home.js).

## Plugins
The slate-editor plugins can be installed individually. Check the list below:

| **Docs**                                              | **Package**                          |
|:------------------------------------------------------|:-------------------------------------|
| [Alignment](../slate-editor-alignment-plugin)         | `@slate-editor/alignment-plugin`     |
| [Bold](../slate-editor-bold-plugin)                   | `@slate-editor/bold-plugin`          |
| [Color](../slate-editor-color-plugin)                 | `@slate-editor/color-plugin`         |
| [Embed](../slate-editor-embed-plugin)                 | `@slate-editor/embed-plugin`         |
| [FontFamily](../slate-editor-font-family-plugin)      | `@slate-editor/font-family-plugin`   |
| [FontSize](../slate-editor-font-size-plugin)          | `@slate-editor/font-size-plugin`     |
| [Grid](../slate-editor-grid-plugin)                   | `@slate-editor/grid-plugin`          |
| [Image](../slate-editor-image-plugin)                 | `@slate-editor/image-plugin`         |
| [Italic](../slate-editor-italic-plugin)               | `@slate-editor/italic-plugin`        |
| [Link](../slate-editor-link-plugin)                   | `@slate-editor/link-plugin`          |
| [List](../slate-editor-list-plugin)                   | `@slate-editor/list-plugin`          |
| [StateLogger](../slate-editor-state-logger)           | `@slate-editor/state-logger`         |
| [Strikethrough](../slate-editor-strikethrough-plugin) | `@slate-editor/strikethrough-plugin` |
| [ToggleReadonly](../slate-editor-toggle-readonly)     | `@slate-editor/toggle-readonly`      |
| [Underline](../slate-editor-underline-plugin)         | `@slate-editor/underline-plugin`     |

## Contributing
To help us develop new features or fix bugs, to setup your development environment is too simple. Just follow the steps:

- Clone the project
```
git clone git@github.com:nossas/slate-editor.git
```
- Start the example
```
yarn dev
```

And it's done! Easy, isn't?!

---

To get the **ImagePlugin** working in 100% of its functionality, you need to define the
environment variables below in .env file:

- **REACT_APP_API_URL**: e.g. https://api.bonde.org
  - The URL of the API
- **REACT_APP_SIGNING_URL_ENDPOINT**: e.g. `/uploads`
  - The endpoint that will sign the URL to upload the image to AWS S3.
  - To sign the URL on your API, you can check an example with RoR [here](https://github.com/nossas/bonde-server/blob/master/app/controllers/uploads_controller.rb).

## References
- [SlateJS](https://github.com/ianstormtaylor/slate) - A completely customizable framework for building rich text editors.
