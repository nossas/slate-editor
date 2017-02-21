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
import * as AlignmentUtils from './AlignmentUtils'
import AlignmentButtonBar from './AlignmentButtonBar'
import AlignmentLeftButton from './AlignmentLeftButton'
import AlignmentCenterButton from './AlignmentCenterButton'
import AlignmentRightButton from './AlignmentRightButton'


const AlignmentPlugin = options => ({
  schema: AlignmentSchema,

  onKeyDown(...args) {
    return AlignmentKeyboardShortcut(...args)
  },
})

export {
  AlignmentPlugin,
  AlignmentSchema,
  AlignmentNode,
  AlignmentKeyboardShortcut,
  AlignmentUtils,
  AlignmentButtonBar,
  AlignmentLeftButton,
  AlignmentCenterButton,
  AlignmentRightButton,
}
