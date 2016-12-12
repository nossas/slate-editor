<img src="https://www.psdmockups.com/wp-content/uploads/2016/07/slatejs-520x292.jpg" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>
<img src="https://avatars2.githubusercontent.com/u/1479357?v=3&s=250" alt="Nossas Cidades logo" title="Nossas Cidades" align="right" height="70"/>

# [SlateJS](https://github.com/ianstormtaylor/slate) - Color Plugin
The goal of this plugin is to offers an easy handling of SlateJS color mark node content editable. Providing a simple API and easy usage, basing on concept of plugin-centric by SlateJS framework.

# Usage

#### SlateJS Color Plugin
```js
import React, { Component } from 'react'
import ColorPlugin from 'slate-font-family-plugin'

const plugins = [
  ColorPlugin()
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

#### SlateJS Color Plugin Button
```js
import React, { Component } from 'react'
import { ColorButton } from 'slate-font-family-plugin'

class SlateEditor extends Component {
  onChange(state) {
    this.setState({ state })
  }
  render() {
    return (
      <div className="editor--toolbar">
        <ColorButton
          state={this.state.state}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}
```

# Keyboard Shortcut

| Platform                 | Action              | Shortcut                                     |
|--------------------------|---------------------|----------------------------------------------|
| ![Apple Logo][apple]     | Toggle Color Picker | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>l</kbd> |
| ![Windows Logo][windows] | Toggle Color Picker | <kbd>^</kbd> + <kbd>alt</kbd> + <kbd>l</kbd> |

# API

| Target                | Description                                                                |
|-----------------------|----------------------------------------------------------------------------|
| ColorMark             | Component that holds the html that will wrap the content with color style. |
| ColorUtils            | Generic file that holds the util common functions.                         |
| ColorButton           | Button component that have behaviour to wrap content with color style.     |
| ColorKeyboardShortcut | Keyboard shortcut file that manipulates `onKeyDown` event inside SlateJS.  |
| ColorStateModel       | Class that knows the state structure of the plugin                         |

# TODO

- Make keyboard shortcut accepts customization;
- Add keyboard shortcut to apply color to expanded selection;
- Add keyboard shortcut to remove color from expanded selection;
- Add button to apply color to expanded selection;
- Add button to remove color from expanded selection;
- Add handle to manipulates collapsed selection to remove color to anchor word;
- Add behaviour to show which color have applied to collapsed selection;
- Add behaviour to show which color have applied to expanded selection;

[apple]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/apple-ios-system-platform-os-mac-linux-48.png
[windows]: https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-48.png
