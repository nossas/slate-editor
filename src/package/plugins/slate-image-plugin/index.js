//
// Schema
//
import ImageSchema from './ImageSchema'
import ImageNode from './ImageNode'

//
// Keyboard
//
import ImageKeyboardShortcut from './ImageKeyboardShortcut'

//
// External
//
import ImageUtils from './ImageUtils'
import ImageButton from './ImageButton'


export default options => ({
  schema: ImageSchema,

  onKeyDown(...args) {
    return ImageKeyboardShortcut(...args)
  },
})

export {
  ImageSchema,
  ImageNode,
  ImageKeyboardShortcut,
  ImageUtils,
  ImageButton,
}
