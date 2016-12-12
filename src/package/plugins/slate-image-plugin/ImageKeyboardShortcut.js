import keycode from "keycode";

import { insertImageStrategy } from './ImageUtils'


const ImageKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    const command = data.isMod && event.shiftKey && keycode(data.code) === 'i'
    if (command) return insertImageStrategy(state)
    return
  }
})

export default ImageKeyboardShortcut
