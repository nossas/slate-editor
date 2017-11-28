//
// Rendering
//
import FontFamilyMark from './FontFamilyMark'

//
// Keyboard
//
// import FontFamilyKeyboardShortcut from './FontFamilyKeyboardShortcut'

//
// External
//
import * as FontFamilyUtils from './FontFamilyUtils'
import FontFamilyDropdown from './FontFamilyDropdown'


const FontFamilyPlugin = options => ({

  // onKeyDown(...args) {
  //   return FontFamilyKeyboardShortcut(...args)
  // },
})

export {
  FontFamilyPlugin,
  FontFamilyMark,
  // FontFamilyKeyboardShortcut,
  FontFamilyUtils,
  FontFamilyDropdown,
}
