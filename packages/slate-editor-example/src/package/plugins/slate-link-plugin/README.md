<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - Link Plugin
The goal of this plugin is to offers an easy handling of SlateJS link mark node content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS Link Plugin
```js
import React, { Component } from 'react'
import LinkPlugin from 'slate-link-plugin'

const plugins = [
  LinkPlugin()
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

#### SlateJS Link Plugin Button
```js
import React, { Component } from 'react'
import { LinkButton } from 'slate-link-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <LinkButton
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Shortcut                    |
|--------------------------|-----------------------------|
| ![Apple Logo][apple]     | <kbd>⌘</kbd> + <kbd>k</kbd> |
| ![Windows Logo][windows] | <kbd>^</kbd> + <kbd>k</kbd> |

# API

| Target               | Description                                                               |
|----------------------|---------------------------------------------------------------------------|
| LinkNode             | Component that holds the html that will wrap the content with link.       |
| LinkKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS. |
| LinkUtils            | Generic file that holds the util common functions.                        |
| LinkButton           | Button component that have behaviour to wrap content with link.           |

# TODO

- Make keyboard shortcut accepts customization;
- Add behaviour to catch onPaste command and identify if it is an url and ask if wants to link it;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
