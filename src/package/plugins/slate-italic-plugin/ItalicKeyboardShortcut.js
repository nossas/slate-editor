import { italicMarkStrategy } from './ItalicUtils'


const ItalicKeyboardShortcut = (event, data, change) => {
  if (data.isMod && !event.shiftKey && data.key === 'i') return italicMarkStrategy(change)
  return
}

export default ItalicKeyboardShortcut
