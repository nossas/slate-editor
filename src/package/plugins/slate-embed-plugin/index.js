//
// Schema
//
import EmbedSchema from './EmbedSchema'
import EmbedNode from './EmbedNode'

//
// Keyboard
//
import EmbedKeyboardShortcut from './EmbedKeyboardShortcut'

//
// External
//
import EmbedUtils from './EmbedUtils'
import EmbedButton from './EmbedButton'


export default options => ({
  schema: EmbedSchema,

  onKeyDown(...args) {
    return EmbedKeyboardShortcut(...args)
  },
})

export {
  EmbedSchema,
  EmbedNode,
  EmbedKeyboardShortcut,
  EmbedUtils,
  EmbedButton,
}
