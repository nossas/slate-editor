//
// Schema
//
import AlignmentSchema from './AlignmentSchema'
import AlignmentNode from './AlignmentNode'

//
// Keyboard
//
import AlignmentKeyboardShortcut from './AlignmentKeyboardShortcut'

//
// External
//
import AlignmentUtils from './AlignmentUtils'
import AlignmentButton from './AlignmentButton'


export default options => ({
  schema: AlignmentSchema,

  onKeyDown(...args) {
    return AlignmentKeyboardShortcut(...args)
  },
})

export {
  AlignmentSchema,
  AlignmentNode,
  AlignmentKeyboardShortcut,
  AlignmentUtils,
  AlignmentButton,
}
