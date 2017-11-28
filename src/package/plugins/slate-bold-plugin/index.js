//
// Rendering
//
import BoldMark from './BoldMark'

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
  onKeyDown(...args) {
    return BoldKeyboardShortcut(...args)
  },
})

export {
  BoldPlugin,
  BoldMark,
  BoldKeyboardShortcut,
  BoldUtils,
  BoldButton,
}
