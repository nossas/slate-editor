import UnderlineMark from './UnderlineMark'
import UnderlineUtils from './UnderlineUtils'
import UnderlineButton from './UnderlineButton'
import UnderlineKeyboardShortcut from './UnderlineKeyboardShortcut'


export default options => ({
  schema: {
    marks: {
      underline: UnderlineMark,
    },
  },
  ...UnderlineKeyboardShortcut,
})

export {
  UnderlineMark,
  UnderlineUtils,
  UnderlineButton,
  UnderlineKeyboardShortcut,
}
