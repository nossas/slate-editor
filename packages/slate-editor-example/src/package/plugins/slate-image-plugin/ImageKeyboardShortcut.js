import { isMod } from '../../utils/keyboard-event'
import { forceClickUploadButton } from './ImageUtils'

const ImageKeyboardShortcut = (event, change, editor) => {
  if (isMod(event) && event.shiftKey && event.key === 'i') return forceClickUploadButton(editor)
  return
}

export default ImageKeyboardShortcut
