import { isMod } from '../../utils/keyboard-event'
import { fontFamilyMarkStrategy } from './FontFamilyUtils'

const FontFamilyKeyboardShortcut = (event, change, editor) => {
  if (!isMod(event) || event.key !== 'b') return
  return fontFamilyMarkStrategy(change)
}

export default FontFamilyKeyboardShortcut
