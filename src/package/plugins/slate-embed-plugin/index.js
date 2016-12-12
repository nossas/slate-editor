import EmbedNode from './EmbedNode'
import EmbedSchema from './EmbedSchema'
import EmbedUtils from './EmbedUtils'
import EmbedButton from './EmbedButton'
import EmbedKeyboardShortcut from './EmbedKeyboardShortcut'


export default options => ({
  schema: EmbedSchema,

  onKeyDown(...args) {
    return EmbedKeyboardShortcut(...args)
  },
})

export {
  EmbedNode,
  EmbedUtils,
  EmbedButton,
  EmbedKeyboardShortcut,
}
