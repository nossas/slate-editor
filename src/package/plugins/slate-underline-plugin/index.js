//
// Schema
//
import UnderlineSchema from './UnderlineSchema'
import UnderlineMark from './UnderlineMark'

//
// Keyboard
//
import UnderlineKeyboardShortcut from './UnderlineKeyboardShortcut'

//
// External
//
import UnderlineUtils from './UnderlineUtils'
import UnderlineButton from './UnderlineButton'


export default options => ({
  schema: UnderlineSchema,

  onKeyDown(...args) {
    return UnderlineKeyboardShortcut(...args)
  },
})

export {
  UnderlineSchema,
  UnderlineMark,
  UnderlineKeyboardShortcut,
  UnderlineUtils,
  UnderlineButton,
}
