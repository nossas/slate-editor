import keycode from 'keycode'

import { boldMarkStrategy } from './BoldUtils'


const BoldKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    if (!data.isMod || keycode(data.code) !== 'b') return
    return boldMarkStrategy(state)
  }
})

export default BoldKeyboardShortcut
