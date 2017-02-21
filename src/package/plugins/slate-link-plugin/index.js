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
import * as LinkUtils from './LinkUtils'
import LinkButton from './LinkButton'


const LinkPlugin = options => ({
  schema: LinkSchema,

  onKeyDown(...args) {
    return LinkKeyboardShortcut(...args)
  },
})

export {
  LinkPlugin,
  LinkSchema,
  LinkNode,
  LinkKeyboardShortcut,
  LinkUtils,
  LinkButton,
}
