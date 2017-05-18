<h1 align="center">Slate Editor</h1>

<p align="center">
  <img
    src="https://s3.amazonaws.com/hub-central/uploads/logo-nossas-20170517185909.svg"
    width="320"
    height="320"
    alt="BONDE Logo"
  />
  <br />
  <p style="margin-top: 50px" align="center">
    <a href="http://ci.bonde.org/nossas/bonde-client">
    <a href="https://github.com/nossas/slate-editor/blob/master/LICENSE">
      <img
        alt="Licence"
        src="https://img.shields.io/github/license/nossas/slate-editor.svg"
      />
    </a>
    <a href="https://conventionalcommits.org">
      <img
        alt="Conventional Commits"
        src="https://img.shields.io/badge/Conventional%20Commits-1.0.0--beta.1-brightgreen.svg"
      />
    </a>
  </p>
</p>

##

# Let's install!
It's just simply run `yarn add slate-editor --save` or `npm install slate-editor --save`

# How to use
You can use which plugin you want. No need to use all plugins available.

In the example below we only add the [Bold](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-bold-plugin) plugin with its button in the toolbar.

**Basic example**
```jsx
import React from 'react'
import {
  SlateEditor, SlateToolbar, SlateContent,
  BoldPlugin, BoldButton
} from 'slate-editor'

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
And it's done! :rocket:

Take a look at the [full working example](https://github.com/nossas/slate-editor/blob/master/src/example/pages/Home.js).

# Plugins docs
- [Alignment](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-alignment-plugin)
- [Bold](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-bold-plugin)
- [Color](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-color-plugin)
- [Embed](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-embed-plugin)
- [FontFamily](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-font-family-plugin)
- [FontSize](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-font-size-plugin)
- [Grid](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-grid-plugin)
- [Image](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-image-plugin)
- [Italic](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-italic-plugin)
- [Link](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-link-plugin)
- [List](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-list-plugin)
- [StateLogger](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-state-logger)
- [Strikethrough](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-strikethrough-plugin)
- [ToggleReadonly](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-toggle-readonly)
- [Underline](https://github.com/nossas/slate-editor/tree/master/src/package/plugins/slate-underline-plugin)

# Contributing
To help us develop new features or fix bugs, to setup your development environment is too simple. Just follow the steps:
- `git clone git@github.com:nossas/slate-editor.git` the project
- `yarn start` or `npm start`

And it's done! Easy, isn't?!

## References
- [SlateJS](https://github.com/ianstormtaylor/slate) - A completely customizable framework for building rich text editors.
