import { insertImageStrategy } from './ImageUtils'


const ImageKeyboardShortcut = (event, data, state) => {
  if (data.isMod && event.shiftKey && data.key === 'i') return insertImageStrategy(state)
  return
}

export default ImageKeyboardShortcut
