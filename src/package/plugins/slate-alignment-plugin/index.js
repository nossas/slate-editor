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
import AlignmentButtonBar from './AlignmentButtonBar'
import AlignmentLeftButton from './AlignmentLeftButton'
import AlignmentCenterButton from './AlignmentCenterButton'
import AlignmentRightButton from './AlignmentRightButton'


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
  AlignmentButtonBar,
  AlignmentLeftButton,
  AlignmentCenterButton,
  AlignmentRightButton,
}
