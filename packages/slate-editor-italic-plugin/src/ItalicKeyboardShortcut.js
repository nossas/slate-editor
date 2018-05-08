import { keyboardEvent } from '@slate-editor/utils'
import { italicMarkStrategy } from './ItalicUtils'


const ItalicKeyboardShortcut = (event, change) => {
  if (keyboardEvent.isMod(event) && !event.shiftKey && event.key === 'i') {
    return italicMarkStrategy(change)
  }
  return
}

export default ItalicKeyboardShortcut
