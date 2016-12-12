//
// Schema
//
import ItalicSchema from './ItalicSchema'
import ItalicMark from './ItalicMark'

//
// Keyboard
//
import ItalicKeyboardShortcut from './ItalicKeyboardShortcut'

//
// External
//
import ItalicUtils from './ItalicUtils'
import ItalicButton from './ItalicButton'


export default options => ({
  schema: ItalicSchema,

  onKeyDown(...args) {
    return ItalicKeyboardShortcut(...args)
  },
})

export {
  ItalicSchema,
  ItalicMark,
  ItalicKeyboardShortcut,
  ItalicUtils,
  ItalicButton,
}
