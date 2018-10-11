// Rendering
import FontSizeMark from './FontSizeMark'

// Keyboard
import FontSizeKeyboardShortcut from './FontSizeKeyboardShortcut'

// External
import * as FontSizeUtils from './FontSizeUtils'
import FontSizeInput from './FontSizeInput'

// Validation
import ValidatePluginOptions from './ValidatePluginOptions'

const FontSizePlugin = options => {

  ValidatePluginOptions(options)

  return {
    onKeyDown(...args) {
      return FontSizeKeyboardShortcut(...args, options)
    }
  }
}

export {
  FontSizePlugin,
  FontSizeMark,
  FontSizeKeyboardShortcut,
  FontSizeUtils,
  FontSizeInput,
}
