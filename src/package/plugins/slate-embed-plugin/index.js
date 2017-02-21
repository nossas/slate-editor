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
import * as EmbedUtils from './EmbedUtils'
import EmbedButton from './EmbedButton'


const EmbedPlugin = options => ({
  schema: EmbedSchema,

  onKeyDown(...args) {
    return EmbedKeyboardShortcut(...args)
  },
})

export {
  EmbedPlugin,
  EmbedSchema,
  EmbedNode,
  EmbedKeyboardShortcut,
  EmbedUtils,
  EmbedButton,
}
