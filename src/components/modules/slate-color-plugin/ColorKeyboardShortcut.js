import keycode from 'keycode'

import { colorMarkStrategy } from './ColorUtils'


const ColorKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    const key = keycode(data.code) === 'c'
    const mac = data.isCmd && data.isCtrl && key
    const win = data.isCtrl && data.isAlt && key

    if (mac || win) return colorMarkStrategy(state)
    return
  }
})

export default ColorKeyboardShortcut
