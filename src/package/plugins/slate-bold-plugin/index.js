//
// Schema
//
import BoldSchema from './BoldSchema'
import BoldNode from './BoldNode'

//
// Keyboard
//
import BoldKeyboardShortcut from './BoldKeyboardShortcut'

//
// External
//
import BoldUtils from './BoldUtils'
import BoldButton from './BoldButton'


export default options => ({
  schema: BoldSchema,

  onKeyDown(...args) {
    return BoldKeyboardShortcut(...args)
  },
})

export {
  BoldSchema,
  BoldNode,
  BoldKeyboardShortcut,
  BoldUtils,
  BoldButton,
}
