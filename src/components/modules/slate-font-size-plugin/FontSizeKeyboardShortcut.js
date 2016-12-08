import keycode from 'keycode'

import { fontSizeIncrease, fontSizeDecrease, hasMark } from './FontSizeUtils'


const FontSizeKeyboardShortcut = ({ initialFontSize }) => ({
  onKeyDown(event, data, state, editor) {
    const {
      props: {
        changeState,
        fontSize: fontSizeState,
      }
    } = editor

    const increase = keycode(data.code) === '='
    const decrease = keycode(data.code) === '-'

    const mac = data.isCmd && data.isCtrl
    const win = data.isCtrl && data.isAlt

    const isIncreaseMac = mac && increase
    const isIncreaseWin = win && increase
    const isIncrease = isIncreaseMac || isIncreaseWin

    const isDecreaseMac = mac && decrease
    const isDecreaseWin = win && decrease
    const isDecrease = isDecreaseMac || isDecreaseWin

    const fontSize = initialFontSize

    // Move this verification to outside of keyboard shortcut class.
    if (!hasMark(state) && fontSizeState !== initialFontSize) changeState({ fontSize })

    if (isIncrease) return fontSizeIncrease({ state, fontSize, changeState })
    if (isDecrease) return fontSizeDecrease({ state, fontSize, changeState })
    return
  }
})

export default FontSizeKeyboardShortcut
