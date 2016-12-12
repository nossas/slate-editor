import FontFamilyNode from './FontFamilyNode'
import FontFamilyUtils from './FontFamilyUtils'
import FontFamilyDropdown from './FontFamilyDropdown'
// import FontFamilyKeyboardShortcut from './FontFamilyKeyboardShortcut'


export default options => ({
  schema: {
    marks: {
      'font-family': FontFamilyNode,
    },
  },
  // ...FontFamilyKeyboardShortcut,
})

export {
  FontFamilyNode,
  FontFamilyUtils,
  FontFamilyDropdown,
  // FontFamilyKeyboardShortcut,
}
