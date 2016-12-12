import ItalicNode from './ItalicNode'
import ItalicUtils from './ItalicUtils'
import ItalicButton from './ItalicButton'
import ItalicKeyboardShortcut from './ItalicKeyboardShortcut'


export default options => ({
  schema: {
    marks: {
      italic: ItalicNode,
    },
  },
  ...ItalicKeyboardShortcut,
})

export {
  ItalicNode,
  ItalicUtils,
  ItalicButton,
  ItalicKeyboardShortcut,
}
