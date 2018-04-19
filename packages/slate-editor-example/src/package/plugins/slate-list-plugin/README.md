<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - List Plugin
The goal of this plugin is to offers an easy handling of SlateJS list mark node content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS List Plugin
```js
import React, { Component } from 'react'
import ListPlugin from 'slate-list-plugin'

const plugins = [
  ListPlugin()
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

#### SlateJS List Plugin Button
```js
import React, { Component } from 'react'
import { ListButton } from 'slate-list-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <ListButton
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Action         | Shortcut                                          |
|--------------------------|----------------|---------------------------------------------------|
| ![Apple Logo][apple]     | Unordered List | <kbd>^</kbd> + <kbd>shift</kbd> + <kbd>l</kbd>    |
| ![Apple Logo][apple]     | Ordered List   | <kbd>^</kbd> + <kbd>shift</kbd> + <kbd>n</kbd>    |
| ![Windows Logo][windows] | Unordered List | <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>l</kbd>  |
| ![Windows Logo][windows] | Ordered List   | <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>n</kbd>  |

# API

| Target               | Description                                                               |
|----------------------|---------------------------------------------------------------------------|
| ListNode             | Component that holds the html that will wrap the content with list style. |
| ListKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS. |
| ListUtils            | Generic file that holds the util common functions.                        |
| ListButtonBar        | Component that holds all action buttons to handle list behaviours.        |
| UnorderedListButton  | Component that render ordered list button to handle its behaviour.        |
| OrderedListButton    | Component that render unordered list button to handle its behaviour.      |

# TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
