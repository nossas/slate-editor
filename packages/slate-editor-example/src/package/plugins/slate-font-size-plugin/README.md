<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - Font Size Plugin
The goal of this plugin is to offers an easy handling of SlateJS font size mark node content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS Font Size Plugin
```js
import React, { Component } from 'react'
import FontSizePlugin from 'slate-font-size-plugin'

const plugins = [
  FontSizePlugin()
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

#### SlateJS Font Size Plugin - Input
```js
import React, { Component } from 'react'
import { FontSizeInput } from 'slate-font-size-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <FontSizeInput
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Action   | Shortcut       |
|--------------------------|----------|----------------|
| ![Apple Logo][apple]     | Increase | <kbd>⌘</kbd>+<kbd>shift</kbd>+<kbd>></kbd>     |
| ![Apple Logo][apple]     | Decrease | <kbd>⌘</kbd>+<kbd>shift</kbd>+<kbd><</kbd>     |
| ![Windows Logo][windows] | Increase | <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>></kbd>  |
| ![Windows Logo][windows] | Decrease | <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd><</kbd>  |

# API

| Target                     | Description                                                                    |
|----------------------------|--------------------------------------------------------------------------------|
| FontSizeMark               | Component that holds the html that will wrap the content with font size style. |
| FontSizeKeyboardShortcut   | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.      |
| FontSizeUtils              | Generic file that holds the util common functions.                             |
| FontSizeInput              | Input component that have behaviour to wrap content with font size style.      |

# TODO

- Make keyboard shortcut accepts customization;
- Add keyboard shortcut to apply font size to expanded selection;
- Add keyboard shortcut to remove font size from expanded selection;
- Add button to apply font size to expanded selection;
- Add button to remove font size from expanded selection;
- Add handle to manipulates collapsed selection to remove font size to anchor word;
- Add behaviour to show which font size have applied to collapsed selection;
- Add behaviour to show which font size have applied to expanded selection;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
