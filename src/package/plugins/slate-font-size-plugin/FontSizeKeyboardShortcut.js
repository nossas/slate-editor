import { fontSizeIncrease, fontSizeDecrease } from './FontSizeUtils'


const FontSizeKeyboardShortcut = (event, data, change, editor, options) => {
  const { changeState } = editor.props
  const { initialFontSize } = options

  const modShift = data.isMod && data.isShift
  const isDecrease = modShift && data.key === ','
  const isIncrease = modShift && data.key === '.'

  const fontSize = initialFontSize

  if (isDecrease) return fontSizeDecrease({ change, fontSize, changeState })
  if (isIncrease) return fontSizeIncrease({ change, fontSize, changeState })
  return
}

export default FontSizeKeyboardShortcut
