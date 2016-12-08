import keycode from 'keycode'

import { fontSizeNodeIncreaseStrategy } from './FontSizeUtils'


const FontSizeKeyboardShortcut = ({ initialFontSize }) => ({
  onKeyDown(event, data, state) {
    const key = keycode(data.code) === '='
    const increaseMac = data.isCmd && data.isCtrl && key
    const increaseWin = data.isCtrl && data.isAlt && key

    const fontSize = initialFontSize

    if (increaseMac || increaseWin) return fontSizeNodeIncreaseStrategy({ state, fontSize })
    return
  }
})

export default FontSizeKeyboardShortcut
