import ImageNode from './ImageNode'
import ImageUtils from './ImageUtils'
import ImageButton from './ImageButton'
import ImageKeyboardShortcut from './ImageKeyboardShortcut'


export default options => ({
  schema: {
    nodes: {
      image: ImageNode,
    },
  },
  ...ImageKeyboardShortcut,
})

export {
  ImageNode,
  ImageUtils,
  ImageButton,
  ImageKeyboardShortcut,
}
