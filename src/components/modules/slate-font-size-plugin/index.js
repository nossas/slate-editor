import FontSizeMark from './FontSizeMark'
import FontSizeUtils from './FontSizeUtils'
import FontSizeInput from './FontSizeInput'
import FontSizeSchema from './FontSizeSchema'
import FontSizeKeyboardShortcut from './FontSizeKeyboardShortcut'

// Validation
import ValidatePluginOptions from './ValidatePluginOptions'

// onSelect
import SelectionUpdateInputValue from './SelectionUpdateInputValue'

const FontSizePlugin = options => {

  ValidatePluginOptions(options)
  const { initialFontSize } = options

  return {
    schema: FontSizeSchema,

    onKeyDown(...args) {
      return FontSizeKeyboardShortcut(...args, initialFontSize)
    },

    onSelect(...args) {
      SelectionUpdateInputValue(...args, initialFontSize)
    },
  }
}

export {
  FontSizeMark,
  FontSizeUtils,
  FontSizeInput,
  FontSizeKeyboardShortcut,
}
export default FontSizePlugin
