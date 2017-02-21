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
import * as BoldUtils from './BoldUtils'
import BoldButton from './BoldButton'


const BoldPlugin = options => ({
  schema: BoldSchema,

  onKeyDown(...args) {
    return BoldKeyboardShortcut(...args)
  },
})

export {
  BoldPlugin,
  BoldSchema,
  BoldNode,
  BoldKeyboardShortcut,
  BoldUtils,
  BoldButton,
}
