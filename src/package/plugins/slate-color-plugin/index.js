//
// Rendering
//
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
  onKeyDown(...args) {
    return ColorKeyboardShortcut(...args)
  },

  onSelect(...args) {
    SelectionPickerColorUpdate(...args)
  },
})

export {
  ColorPlugin,
  ColorMark,
  ColorKeyboardShortcut,
  ColorUtils,
  ColorButton,
  ColorStateModel,
}
