import AlignmentNode from './AlignmentNode'
import AlignmentUtils from './AlignmentUtils'
import AlignmentButton from './AlignmentButton'
import AlignmentKeyboardShortcut from './AlignmentKeyboardShortcut'


export default options => ({
  schema: {
    nodes: {
      alignment: AlignmentNode,
    },
  },
  ...AlignmentKeyboardShortcut,
})

export {
  AlignmentNode,
  AlignmentUtils,
  AlignmentButton,
  AlignmentKeyboardShortcut,
}
