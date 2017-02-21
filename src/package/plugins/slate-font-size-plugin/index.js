// Schema
import FontSizeSchema from './FontSizeSchema'
import FontSizeMark from './FontSizeMark'

// Keyboard
import FontSizeKeyboardShortcut from './FontSizeKeyboardShortcut'

// External
import * as FontSizeUtils from './FontSizeUtils'
import FontSizeInput from './FontSizeInput'

// Validation
import ValidatePluginOptions from './ValidatePluginOptions'

// Selection
import SelectionUpdateInputValue from './SelectionUpdateInputValue'

const FontSizePlugin = options => {

  ValidatePluginOptions(options)

  return {
    schema: FontSizeSchema,

    onKeyDown(...args) {
      return FontSizeKeyboardShortcut(...args, options)
    },

    onSelect(...args) {
      SelectionUpdateInputValue(...args, options)
    },
  }
}

export {
  FontSizePlugin,
  FontSizeSchema,
  FontSizeMark,
  FontSizeKeyboardShortcut,
  FontSizeUtils,
  FontSizeInput,
}
