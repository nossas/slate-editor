<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - Underline Plugin
The goal of this plugin is to offers an easy handling of SlateJS underline mark content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS Underline Plugin
```js
import React, { Component } from 'react'
import UnderlinePlugin from 'slate-underline-plugin'

const plugins = [
  UnderlinePlugin()
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

#### SlateJS Underline Plugin Button
```js
import React, { Component } from 'react'
import { UnderlineButton } from 'slate-underline-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <UnderlineButton
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Shortcut                     |
|--------------------------|------------------------------|
| ![Apple Logo][apple]     | <kbd>⌘</kbd> + <kbd>u</kbd>  |
| ![Windows Logo][windows] | <kbd>^</kbd> + <kbd>u</kbd>  |

# API

| Target                    | Description                                                                    |
|---------------------------|--------------------------------------------------------------------------------|
| UnderlineMark             | Component that holds the html that will wrap the content with underline style. |
| UnderlineKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.      |
| UnderlineUtils            | Generic file that holds the util common functions.                             |
| UnderlineButton           | Button component that have behaviour to wrap content with underline style.     |

# TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
