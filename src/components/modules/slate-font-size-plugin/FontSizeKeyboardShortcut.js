import keycode from 'keycode'

import { fontSizeNodeIncreaseStrategy, hasInline } from './FontSizeUtils'


const FontSizeKeyboardShortcut = ({ initialFontSize }) => ({
  onKeyDown(event, data, state, { props: { changeState, fontSize: fontSizeState } }) {
    const key = keycode(data.code) === '='
    const increaseMac = data.isCmd && data.isCtrl && key
    const increaseWin = data.isCtrl && data.isAlt && key

    const fontSize = initialFontSize

    // Move this verification to outside of keyboard shortcut class.
    if (!hasInline(state) && fontSizeState !== initialFontSize) changeState({ fontSize })
    if (increaseMac || increaseWin) return fontSizeNodeIncreaseStrategy({ state, fontSize })
    return
  }
})

export default FontSizeKeyboardShortcut
