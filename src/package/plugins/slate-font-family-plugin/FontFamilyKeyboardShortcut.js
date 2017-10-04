import keycode from 'keycode'

import { fontFamilyMarkStrategy } from './FontFamilyUtils'


const FontFamilyKeyboardShortcut = (event, data, change) => {
  if (!data.isMod || keycode(data.code) !== 'b') return
  return fontFamilyMarkStrategy(change)
}

export default FontFamilyKeyboardShortcut
