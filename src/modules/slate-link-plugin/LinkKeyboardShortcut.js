import keycode from "keycode";

import { insertLinkStrategy } from './LinkUtils'


const LinkKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    if (!data.isMod || keycode(data.code) !== 'k') return
    return insertLinkStrategy(state)
  }
})

export default LinkKeyboardShortcut
