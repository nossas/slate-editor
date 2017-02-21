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
import * as ImageUtils from './ImageUtils'
import ImageButton from './ImageButton'


const ImagePlugin = options => ({
  schema: ImageSchema,

  onKeyDown(...args) {
    return ImageKeyboardShortcut(...args)
  },
})

export {
  ImagePlugin,
  ImageSchema,
  ImageNode,
  ImageKeyboardShortcut,
  ImageUtils,
  ImageButton,
}
