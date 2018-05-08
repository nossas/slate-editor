import { keyboardEvent } from '@slate-editor/utils'
import { fontSizeIncrease, fontSizeDecrease } from './FontSizeUtils'


const FontSizeKeyboardShortcut = (event, change, editor, options) => {
  const { changeState } = editor.props
  const { initialFontSize } = options

  const modShift = keyboardEvent.isMod(event) && event.shiftKey
  const isDecrease = modShift && event.key === ','
  const isIncrease = modShift && event.key === '.'

  const fontSize = initialFontSize

  if (isDecrease) return fontSizeDecrease({ change, fontSize, changeState })
  if (isIncrease) return fontSizeIncrease({ change, fontSize, changeState })
  return
}

export default FontSizeKeyboardShortcut
