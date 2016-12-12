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
import ColorUtils from './ColorUtils'
import ColorButton from './ColorButton'
import ColorStateModel from './ColorStateModel'

//
// Selection
//
import SelectionPickerColorUpdate from './SelectionPickerColorUpdate'


export default options => ({
  schema: ColorSchema,

  onKeyDown(...args) {
    return ColorKeyboardShortcut(...args)
  },

  onSelect(...args) {
    SelectionPickerColorUpdate(...args)
  },
})

export {
  ColorSchema,
  ColorMark,
  ColorKeyboardShortcut,
  ColorUtils,
  ColorButton,
  ColorStateModel,
}
