import { italicMarkStrategy } from './ItalicUtils'


const ItalicKeyboardShortcut = (event, data, state) => {
  if (data.isMod && !event.shiftKey && data.key === 'i') return italicMarkStrategy(state)
  return
}

export default ItalicKeyboardShortcut
