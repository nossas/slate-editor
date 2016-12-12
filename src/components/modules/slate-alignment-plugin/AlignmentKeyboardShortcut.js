import keycode from 'keycode'

import { alignmentMarkStrategy } from './AlignmentUtils'


const AlignmentKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    if (!data.isMod || keycode(data.code) !== 'b') return
    return alignmentMarkStrategy(state)
  }
})

export default AlignmentKeyboardShortcut
