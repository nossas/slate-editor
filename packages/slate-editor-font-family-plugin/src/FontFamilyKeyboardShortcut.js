import { keyboardEvent } from '@slate-editor/utils'
import { fontFamilyMarkStrategy } from './FontFamilyUtils'

const FontFamilyKeyboardShortcut = (event, change, editor) => {
  if (!keyboardEvent.isMod(event) || event.key !== 'b') return
  return fontFamilyMarkStrategy(change)
}

export default FontFamilyKeyboardShortcut
