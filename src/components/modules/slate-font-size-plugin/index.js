import FontSizeNode from './FontSizeNode'
import FontSizeUtils from './FontSizeUtils'
import FontSizeInput from './FontSizeInput'
import FontSizeKeyboardShortcut from './FontSizeKeyboardShortcut'


export default options => ({
  schema: {
    nodes: {
      'font-size': FontSizeNode,
    },
  },
  ...FontSizeKeyboardShortcut,
})

export {
  FontSizeNode,
  FontSizeUtils,
  FontSizeInput,
  FontSizeKeyboardShortcut,
}
