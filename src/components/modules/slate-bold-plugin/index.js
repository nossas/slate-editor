import BoldNode from './BoldNode'
import BoldUtils from './BoldUtils'
import BoldButton from './BoldButton'
import BoldKeyboardShortcut from './BoldKeyboardShortcut'


export default options => ({
  schema: {
    marks: {
      bold: BoldNode,
    },
  },
  ...BoldKeyboardShortcut,
})

export {
  BoldNode,
  BoldUtils,
  BoldButton,
  BoldKeyboardShortcut,
}
