import keycode from 'keycode'

import { underlineMarkStrategy } from './UnderlineUtils'


const UnderlineKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    if (!data.isMod || keycode(data.code) !== 'u') return
    return underlineMarkStrategy(state)
  }
})

export default UnderlineKeyboardShortcut
