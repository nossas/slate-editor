import { isMod } from '../../utils/keyboard-event'
import { italicMarkStrategy } from './ItalicUtils'


const ItalicKeyboardShortcut = (event, change) => {
  if (isMod(event) && !event.shiftKey && event.key === 'i') return italicMarkStrategy(change)
  return
}

export default ItalicKeyboardShortcut
