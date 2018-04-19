import { isMod } from '../../utils/keyboard-event'
import { underlineMarkStrategy } from './UnderlineUtils'


const UnderlineKeyboardShortcut = (event, change) => {
  if (isMod(event) && event.key === 'u') return underlineMarkStrategy(change)
  return
}

export default UnderlineKeyboardShortcut
