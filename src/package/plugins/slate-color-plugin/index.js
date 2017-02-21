//
// Schema
//
import ColorSchema from './ColorSchema'
import ColorMark from './ColorMark'

//
// Keyboard
//
import ColorKeyboardShortcut from './ColorKeyboardShortcut'

//
// External
//
import * as ColorUtils from './ColorUtils'
import ColorButton from './ColorButton'
import ColorStateModel from './ColorStateModel'

//
// Selection
//
import SelectionPickerColorUpdate from './SelectionPickerColorUpdate'


const ColorPlugin = options => ({
  schema: ColorSchema,

  onKeyDown(...args) {
    return ColorKeyboardShortcut(...args)
  },

  onSelect(...args) {
    SelectionPickerColorUpdate(...args)
  },
})

export {
  ColorPlugin,
  ColorSchema,
  ColorMark,
  ColorKeyboardShortcut,
  ColorUtils,
  ColorButton,
  ColorStateModel,
}
