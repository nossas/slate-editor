import ColorMark from './ColorMark'
import ColorUtils from './ColorUtils'
import ColorButton from './ColorButton'
import ColorKeyboardShortcut from './ColorKeyboardShortcut'
import ColorStateModel from './ColorStateModel'

//
// onSelect
//
import SelectionPickerColorUpdate from './SelectionPickerColorUpdate'


export default options => ({
  schema: {
    marks: {
      'color': ColorMark,
    },
  },
  ...ColorKeyboardShortcut,
  onSelect(...args) {
    SelectionPickerColorUpdate(...args)
  }
})

export {
  ColorMark,
  ColorUtils,
  ColorButton,
  ColorKeyboardShortcut,
  ColorStateModel,
}
