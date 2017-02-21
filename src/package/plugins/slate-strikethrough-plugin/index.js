//
// Schame
//
import StrikethroughSchema from './StrikethroughSchema'
import StrikethroughMark from './StrikethroughMark'

//
// Keyboard
//
import StrikethroughKeyboardShortcut from './StrikethroughKeyboardShortcut'

//
// External
//
import * as StrikethroughUtils from './StrikethroughUtils'
import StrikethroughButton from './StrikethroughButton'


const StrikethroughPlugin = options => ({
  schema: StrikethroughSchema,

  onKeyDown(...args) {
    return StrikethroughKeyboardShortcut(...args)
  },
})

export {
  StrikethroughPlugin,
  StrikethroughSchema,
  StrikethroughMark,
  StrikethroughKeyboardShortcut,
  StrikethroughUtils,
  StrikethroughButton,
}
