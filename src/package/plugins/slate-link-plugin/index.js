//
// Schema
//
import LinkSchema from './LinkSchema'
import LinkNode from './LinkNode'

//
// Keyboard
//
import LinkKeyboardShortcut from './LinkKeyboardShortcut'

//
// External
//
import LinkUtils from './LinkUtils'
import LinkButton from './LinkButton'


export default options => ({
  schema: LinkSchema,

  onKeyDown(...args) {
    return LinkKeyboardShortcut(...args)
  },
})

export {
  LinkSchema,
  LinkNode,
  LinkKeyboardShortcut,
  LinkUtils,
  LinkButton,
}
