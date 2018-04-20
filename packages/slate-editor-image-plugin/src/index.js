//
// Rendering
//
import ImageNode from './ImageNode'
import ImageLinkNode from './ImageLinkNode'

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
  onKeyDown(...args) {
    return ImageKeyboardShortcut(...args)
  },
})

export {
  ImagePlugin,
  ImageNode,
  ImageLinkNode,
  ImageKeyboardShortcut,
  ImageUtils,
  ImageButton,
}
