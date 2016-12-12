<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - Alignment Plugin
The goal of this plugin is to offers an easy handling of SlateJS alignment mark node content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS Alignment Plugin
```js
import React, { Component } from 'react'
import AlignmentPlugin from 'slate-alignment-plugin'

const plugins = [
  AlignmentPlugin()
]

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <Editor
        plugins={plugins}
        state={this.state.state}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
```

#### SlateJS Alignment Plugin Button
```js
import React, { Component } from 'react'
import { AlignmentButton } from 'slate-alignment-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <AlignmentButton
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Shortcut |
|--------------------------|----------|
| ![Apple Logo][apple]     | `⌘`+`b`  |
| ![Windows Logo][windows] | `^`+`b`  |

# API

| Target               | Description                                                               |
|----------------------|---------------------------------------------------------------------------|
| AlignmentNode             | Component that holds the html that will wrap the content with alignment style. |
| AlignmentUtils            | Generic file that holds the util common functions.                        |
| AlignmentButton           | Button component that have behaviour to wrap content with alignment style.     |
| AlignmentKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS. |

# TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
