import FontSizeMark from './FontSizeMark'
import FontSizeUtils from './FontSizeUtils'
import FontSizeInput from './FontSizeInput'
import FontSizeKeyboardShortcut from './FontSizeKeyboardShortcut'

//
// onSelect
//
import SelectionUpdateInputValue from './SelectionUpdateInputValue'

export default options => {
  const sign = '[SlateJS][FontSizePlugin]'

  if (!options) {
    throw new Error(`${sign} You must supply the options to configure the plugin.`)
  }

  if (!options.initialFontSize) {
    throw new Error(`${sign} You must supply the \`initialFontSize\`.`)
  }

  const { initialFontSize } = options

  return {
    schema: {
      marks: {
        'font-size': FontSizeMark,
      },
    },

    ...FontSizeKeyboardShortcut({ initialFontSize }),

    onSelect(...args) {
      SelectionUpdateInputValue(...args, initialFontSize)
    }
  }
}

export {
  FontSizeMark,
  FontSizeUtils,
  FontSizeInput,
  FontSizeKeyboardShortcut,
}
