import { forceClickUploadButton } from './ImageUtils'

const ImageKeyboardShortcut = (event, data, state) => {
  if (data.isMod && event.shiftKey && data.key === 'i') return forceClickUploadButton(state)
  return
}

export default ImageKeyboardShortcut
