import ColorMark from './ColorMark'
import ColorUtils from './ColorUtils'
import ColorButton from './ColorButton'
import ColorKeyboardShortcut from './ColorKeyboardShortcut'
import ColorStateModel from './ColorStateModel'


export default options => ({
  schema: {
    marks: {
      'color': ColorMark,
    },
  },
  ...ColorKeyboardShortcut,
  onSelect(event, data, state, editor) {
    const { hasMark, getMark } = ColorUtils
    const {
      outerState: { color },
      changeState,
    } = editor.props

    if (hasMark(state)) {
      const newColorState = {
        ...color,
        rgba: getMark(state).data.get('rgba'),
      }
      changeState({ color: newColorState })
    }
  }
})

export {
  ColorMark,
  ColorUtils,
  ColorButton,
  ColorKeyboardShortcut,
  ColorStateModel,
}
