import StrikethroughMark from './StrikethroughMark'
import StrikethroughUtils from './StrikethroughUtils'
import StrikethroughButton from './StrikethroughButton'
import StrikethroughKeyboardShortcut from './StrikethroughKeyboardShortcut'


export default options => ({
  schema: {
    marks: {
      strikethrough: StrikethroughMark,
    },
  },
  ...StrikethroughKeyboardShortcut,
})

export {
  StrikethroughMark,
  StrikethroughUtils,
  StrikethroughButton,
  StrikethroughKeyboardShortcut,
}
