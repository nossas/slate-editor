import keycode from 'keycode'

import { italicMarkStrategy } from './ItalicUtils'


const ItalicKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    const command = data.isMod && !event.shiftKey && keycode(data.code) === 'i'
    if (command) return italicMarkStrategy(state)
    return
  }
})

export default ItalicKeyboardShortcut
