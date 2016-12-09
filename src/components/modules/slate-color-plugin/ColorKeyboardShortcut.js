import keycode from 'keycode'


const ColorKeyboardShortcut = ({
  onKeyDown(event, data, state, editor) {
    const { changeState, outerState } = editor.props
    const { color } = outerState
    const { showPicker } = color

    const key = keycode(data.code) === 'l'
    const mac = data.isCmd && data.isShift && key
    const win = data.isAlt && data.isShift && key

    if (mac || win) changeState({ color: { ...color, showPicker: !showPicker } })
    return
  }
})

export default ColorKeyboardShortcut
