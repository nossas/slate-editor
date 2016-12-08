import keycode from 'keycode'

import { fontSizeNodeIncreaseStrategy, hasInline } from './FontSizeUtils'


const FontSizeKeyboardShortcut = ({ initialFontSize }) => ({
  onKeyDown(event, data, state, editor) {
    const {
      props: {
        changeState,
        fontSize: fontSizeState,
      }
    } = editor

    const key = keycode(data.code) === '='
    const isIncreaseMac = data.isCmd && data.isCtrl && key
    const isIncreaseWin = data.isCtrl && data.isAlt && key
    const isIncrease = isIncreaseMac || isIncreaseWin

    const fontSize = initialFontSize

    // Move this verification to outside of keyboard shortcut class.
    if (!hasInline(state) && fontSizeState !== initialFontSize) changeState({ fontSize })

    if (isIncrease) return fontSizeNodeIncreaseStrategy({ state, fontSize, changeState })
    return
  }
})

export default FontSizeKeyboardShortcut
