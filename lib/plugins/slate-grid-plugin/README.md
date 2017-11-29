<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - Grid Plugin
The goal of this plugin is to offers an easy handling of SlateJS grid block node content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS Grid Plugin
```js
import React, { Component } from 'react'
import GridPlugin from 'slate-grid-plugin'

const plugins = [
  GridPlugin()
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

#### SlateJS Grid Plugin Button
```js
import React, { Component } from 'react'
import { GridButton } from 'slate-grid-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <GridButton
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Action    | Shortcut                                     |
|--------------------------|-----------|----------------------------------------------|
| ![Apple Logo][apple]     | Add Grid  | <kbd>⌘</kbd> + <kbd>^</kbd> + <kbd>g</kbd>   |
| ![Apple Logo][apple]     | Split Row | <kbd>⌘</kbd> + <kbd>^</kbd> + <kbd>r</kbd>   |
| ![Windows Logo][windows] | Add Grid  | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>g</kbd> |
| ![Windows Logo][windows] | Split Row | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>r</kbd> |

# API

| Target               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| GridNode             | Component that holds the html that will render the content with grid style. |
| GridRowNode          | Component that holds the html that will render the grid row.                |
| GridCellNode         | Component that holds the html that will render the grid cell.               |
| GridKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.   |
| GridUtils            | Generic file that holds the util common functions.                          |
| GridButtonBar        | Component that holds all action buttons to handle the grid behaviour.       |
| GridButton           | Component that handle behaviour to wrap content with grid style.            |
| GridSplitRowButton   | Component that handle behaviour to split rows into the grid.                |

# TODO

- Make keyboard shortcut accepts customization

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
