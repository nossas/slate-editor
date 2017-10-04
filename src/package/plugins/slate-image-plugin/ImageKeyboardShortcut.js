import { forceClickUploadButton } from './ImageUtils'

const ImageKeyboardShortcut = (event, data, change, editor) => {
  if (data.isMod && event.shiftKey && data.key === 'i') return forceClickUploadButton(editor)
  return
}

export default ImageKeyboardShortcut
