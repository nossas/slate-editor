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

const ColorPlugin = options => ({
  onKeyDown(...args) {
    return ColorKeyboardShortcut(...args)
  }
})

export {
  ColorPlugin,
  ColorMark,
  ColorKeyboardShortcut,
  ColorUtils,
  ColorButton,
  ColorStateModel,
}
