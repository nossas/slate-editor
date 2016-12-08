import keycode from 'keycode'

import { fontSizeNodeIncreaseStrategy } from './FontSizeUtils'
import { DEFAULT_FONT_SIZE } from './FontSizeConstants'


const FontSizeKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    const key = keycode(data.code) === '='
    const increaseMac = data.isCmd && data.isCtrl && key
    const increaseWin = data.isCtrl && data.isAlt && key

    const fontSize = DEFAULT_FONT_SIZE

    if (increaseMac || increaseWin) return fontSizeNodeIncreaseStrategy({ state, fontSize })
    return
  }
})

export default FontSizeKeyboardShortcut
