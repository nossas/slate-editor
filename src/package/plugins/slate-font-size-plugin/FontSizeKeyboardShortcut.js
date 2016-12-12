import keycode from 'keycode'

import { fontSizeIncrease, fontSizeDecrease } from './FontSizeUtils'


const FontSizeKeyboardShortcut = (event, data, state, editor, options) => {
  const { changeState } = editor.props
  const { initialFontSize } = options

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

  if (isIncrease) return fontSizeIncrease({ state, fontSize, changeState })
  if (isDecrease) return fontSizeDecrease({ state, fontSize, changeState })
  return
}

export default FontSizeKeyboardShortcut
