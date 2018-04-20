<h1 align="center">Slate Editor</h1>

<div align="center">
  <p>
    <img
      src="https://s3.amazonaws.com/hub-central/uploads/logo-nossas-20170517185909.svg"
      width="320"
      height="320"
      alt="BONDE Logo"
    />
  </p>

  <div align="center">
    <a href="https://www.npmjs.com/package/slate-editor">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img
        alt="Slate Editor NPM Version"
        src="https://img.shields.io/npm/v/slate-editor.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/slate-editor">
      <img
        alt="Slate Editor NPM Downloads"
        src="https://img.shields.io/npm/dt/slate-editor.svg"
      />
    </a>
  </div>

  <div align="center">
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
  </div>
</div>

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
- `yarn install` or `npm install` to install all the dependency packages
- `yarn start` or `npm start`

And it's done! Easy, isn't?!

---

To get the **ImagePlugin** working in 100% of its functionality, you need to define the
environment variables below:

- **REACT_APP_API_URL**: e.g. https://api.bonde.org
  - The URL of the API
- **REACT_APP_SIGNING_URL_ENDPOINT**: e.g. `/uploads`
  - The endpoint that will sign the URL to upload the image to AWS S3.
  - To sign the URL on your API, you can check an example with RoR [here](https://github.com/nossas/bonde-server/blob/master/app/controllers/uploads_controller.rb).

## References
- [SlateJS](https://github.com/ianstormtaylor/slate) - A completely customizable framework for building rich text editors.
