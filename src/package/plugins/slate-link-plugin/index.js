//
// Rendering
//
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
  onKeyDown(...args) {
    return LinkKeyboardShortcut(...args)
  },
})

export {
  LinkPlugin,
  LinkNode,
  LinkKeyboardShortcut,
  LinkUtils,
  LinkButton,
}
