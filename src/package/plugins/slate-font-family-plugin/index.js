//
// Schema
//
import FontFamilySchema from './FontFamilySchema'
import FontFamilyMark from './FontFamilyMark'

//
// Keyboard
//
// import FontFamilyKeyboardShortcut from './FontFamilyKeyboardShortcut'

//
// External
//
import FontFamilyUtils from './FontFamilyUtils'
import FontFamilyDropdown from './FontFamilyDropdown'


export default options => ({
  schema: FontFamilySchema,

  // onKeyDown(...args) {
  //   return FontFamilyKeyboardShortcut(...args)
  // },
})

export {
  FontFamilySchema,
  FontFamilyMark,
  // FontFamilyKeyboardShortcut,
  FontFamilyUtils,
  FontFamilyDropdown,
}
