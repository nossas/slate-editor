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
import StrikethroughUtils from './StrikethroughUtils'
import StrikethroughButton from './StrikethroughButton'


export default options => ({
  schema: StrikethroughSchema,

  onKeyDown(...args) {
    return StrikethroughKeyboardShortcut(...args)
  },
})

export {
  StrikethroughSchema,
  StrikethroughMark,
  StrikethroughKeyboardShortcut,
  StrikethroughUtils,
  StrikethroughButton,
}
